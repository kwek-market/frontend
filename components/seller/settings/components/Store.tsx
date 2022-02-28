import DragnDrop from "@/components/DnD/DragnDrop";
import Load from "@/components/Loader/Loader";
import useStoreBanner from "@/hooks/useStoreBanner";
import useStoreLocationUpdate from "@/hooks/useStoreLocationUpdate";
import { RootState } from "@/store/rootReducer";
import { getSellerData } from "@/store/seller/seller.action";
import { Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import { LocationInfo, LocationMarker } from "@/components/map";
import useLocation from "@/hooks/useLocation";
import { v4 } from "uuid";

export default function Store() {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 2,
  };
  const {
    user,
    seller: { seller },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { mutate, isLoading } = useStoreBanner();
  const { mutate: post, isLoading: loading } = useStoreLocationUpdate();
  const address = `${seller.shopAddress} ${seller.city}  ${seller.state}`;
  const { data, status, error } = useLocation(address);

  const [store, setStore] = useState({
    storeBannerUrl: "",
    storeDescription: seller.storeDescription ?? "",
  });
  const [files, setFiles] = useState<File>();
  const [previewImage, setPreviewImage] = useState(seller.storeBannerUrl ?? "");
  const [storeLocation, setStoreLocation] = useState({
    city: seller.city ?? "",
    landmark: seller.landmark ?? "",
    lga: seller.lga ?? "",
    shopAddress: seller.shopAddress ?? "",
    state: seller.state ?? "",
  });
  const [locations, setLocations] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });
  const [locationInfo, setLocationInfo] = useState({ name: "", address: "" });

  async function handleFileDrop(files: FileList) {
    let fileList = files[0];
    const { message } = await import("antd");
    // check if file is there
    if (!fileList) {
      return message.error("No file selected");
    }
    // check if file is an image
    if (!fileList.type.match("image/")) {
      return message.error("File must be an image");
    }
    // check if file is larger than 1mb
    if (fileList.size > 1000000) {
      return message.error("File is larger than 1mb");
    }
    const currentIDImage = URL.createObjectURL(fileList);
    setPreviewImage(currentIDImage);
    setFiles(fileList);
  }

  async function checkSetFile(e: React.ChangeEvent<HTMLInputElement>) {
    const { message } = await import("antd");
    if (!e.target.files) return message.error("No file selected");
    let fileList = e.target.files[0];
    // check if file is an image
    if (!fileList.type.match("image/")) {
      return message.error("File must be an image");
    }
    // check if file is larger than 1mb
    if (fileList.size > 1000000) {
      return message.error("File is larger than 1mb");
    }
    const currentIDImage = URL.createObjectURL(e.target.files[0]);
    setPreviewImage(currentIDImage);
    setFiles(fileList);
  }

  async function handleFileUpload() {
    const { message } = await import("antd");
    if (!files) return message.error("No file selected");
    const formData = new FormData();
    formData.append("file", files);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET);
    const controller = new AbortController();
    const signal = controller.signal;
    const options = { method: "POST", body: formData, signal };
    (async () => {
      try {
        let loading = true;
        loading &&
          message.loading({ content: "Uploading...", key: "uploading" });
        const data = await (
          await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL, options)
        ).json();

        loading = false;
        const { secure_url } = data;
        setStore({ ...store, storeBannerUrl: secure_url });
        if (secure_url) {
          message.success("ID Uploaded");
        } else message.error("An error has occured. Please try again");
      } catch (err) {
        console.log(err.message);
        message.error("An error has occured. Please try again", err.message);
      }
    })();
  }

  function saveChanges() {
    const { storeBannerUrl, storeDescription } = store;
    if (storeBannerUrl === "" || storeBannerUrl.length === 0) {
      return message.error("Invalid storeBannerUrl");
    }
    if (storeDescription === "" || storeDescription.length === 0) {
      return message.error("Invalid storeDescription");
    }
    const payload = {
      imageUrl: storeBannerUrl,
      storeDescription,
      token: user.token,
    };
    mutate(payload, {
      onSuccess: (data) => {
        dispatch(getSellerData(user.token));
        message.success(data.storeBanner.message);
      },
      onError: (err: any) => {
        message.error(err.message);
      },
    });
  }

  function updateLocation() {
    const { city, landmark, lga, shopAddress, state } = storeLocation;
    if (city === "") return message.error("city cannot be empty");
    if (landmark === "") return message.error("landmark cannot be empty");
    if (lga === "") return message.error("lga cannot be empty");
    if (shopAddress === "") return message.error("shopAddress cannot be empty");
    if (state === "") return message.error("state cannot be empty");
    const payload = {
      city,
      landmark,
      lga,
      shopAddress,
      state,
      token: user.token,
    };
    post(payload, {
      onSuccess: (data) => {
        dispatch(getSellerData(user.token));
        message.success(data.storeLocationUpdate.message);
      },
      onError: (err: any) => {
        message.error(err.message);
      },
    });
  }

  useEffect(() => {
    if (data !== undefined) {
      setLocations({
        lat: data.results[0].geometry.lat,
        lng: data.results[0].geometry.lng,
      });
    }
  }, [data, status, error]);

  return (
    <section className="tw-mb-7 md:tw-px-12 lg:tw-px-36">
      <div className="">
        <div className="tw-mb-3">
          <div className="tw-flex tw-justify-end tw-mb-5">
            <button
              className="tw-p-3 tw-text-white-100 tw-bg-red-kwek100 tw-rounded-md tw-capitalize"
              onClick={handleFileUpload}
            >
              upload image
            </button>
          </div>
          <label htmlFor="id-upload" className="tw-mt-8 tw-relative">
            <DragnDrop handleFileDrop={handleFileDrop}>
              <div className="tw-border-2 tw-border-gray-kwek100 tw-border-dotted tw-rounded-lg tw-cursor-pointer">
                <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-relative tw-h-[250px]">
                  {previewImage && (
                    <div className="tw-absolute tw-top-0 tw-right-0 tw-bottom-0 tw-left-0 tw-z-10 tw-flex tw-justify-center tw-bg-white-100">
                      <img
                        src={previewImage}
                        alt="preview"
                        width="100%"
                        height="100%"
                        className="tw-object-cover tw-object-top tw-rounded-lg"
                      />
                    </div>
                  )}
                  <p className="tw-text-gray-kwek100 tw-text-sm">
                    Drop image here
                  </p>
                  <p className="tw-border tw-border-red-kwek100 tw-text-red-kwek100 tw-rounded-sm tw-p-2 tw-my-4 tw-font-medium tw-text-md">
                    <i className="" /> choose file{" "}
                    <i className="fas fa-caret-down" />
                  </p>
                  <p className="tw-text-gray-kwek100 tw-text-center tw-text-sm">
                    Supported formats: JPG, PNG, JPEG. File size limit is 1MB{" "}
                    <br />
                    Recommended dimension : 1920 X 1080 px
                  </p>
                </div>
              </div>
              <input
                type="file"
                id="id-upload"
                name="id-upload"
                accept=".png, .jpg, .jpeg, image/*"
                onChange={(e) => checkSetFile(e)}
                className="tw-absolute tw-overflow-hidden tw-w-1 tw-opacity-0 tw-h-1 tw-z-[-1]"
              />
            </DragnDrop>
          </label>
        </div>
        <div className="">
          <label
            htmlFor="storeDescription"
            className="tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 
            "
          >
            Store Description
          </label>
          <Input.TextArea
            id="storeDescription"
            placeholder="This is a description of my test store. MY STORE FOCUSES ON BAGS AND SHOES"
            showCount
            maxLength={200}
            value={store.storeDescription}
            onChange={(e) =>
              setStore({ ...store, storeDescription: e.target.value })
            }
          />
        </div>
        {isLoading && <Load />}
        <div className="tw-flex tw-justify-end tw-mt-7">
          <button
            className="tw-bg-red-kwek100 tw-text-white-100 tw-rounded-md tw-py-3 tw-px-10"
            onClick={() => saveChanges()}
          >
            Save Changes
          </button>
        </div>
      </div>

      <div>
        <div className="tw-border-b tw-border-gray-kwek900 tw-border-opacity-50">
          <p className="tw-uppercase tw-font-semibold tw-text-lg tw-text-gray-kwek900 tw-mb-1">
            store location
          </p>
        </div>
        <section className="tw-mt-4">
          <div className="">
            <label
              htmlFor="streetAddress"
              className="tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 
            "
            >
              Street Address
            </label>
            <Input
              id="streetAddress"
              type="text"
              size="large"
              placeholder="street address"
              value={storeLocation.shopAddress}
              onChange={(e) =>
                setStoreLocation({
                  ...storeLocation,
                  shopAddress: e.target.value,
                })
              }
            />
          </div>
          <div className="tw-my-4 tw-w-full tw-h-[50vh] tw-relative">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              {
                <LocationMarker
                  key={v4()}
                  lat={
                    status === "success"
                      ? locations.lat
                      : defaultProps.center.lat
                  }
                  lng={
                    status === "success"
                      ? locations.lng
                      : defaultProps.center.lng
                  }
                  onClick={() => {
                    setLocationInfo({
                      name: seller.shopName,
                      address: seller.shopAddress,
                    });
                  }}
                />
              }
            </GoogleMapReact>
            {locationInfo.name && locationInfo.address && (
              <LocationInfo
                name={locationInfo.name}
                address={locationInfo.address}
              />
            )}
          </div>
          <section className="tw-grid tw-grid-cols-2 tw-justify-between tw-gap-2 tw-mb-7">
            <div className="tw-flex tw-flex-col tw-relative">
              <label
                htmlFor="state"
                className="tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 
            "
              >
                state
              </label>
              <Input
                id="state"
                type="text"
                placeholder="state"
                className="tw-rounded-sm tw-w-full tw-mt-2"
                size="large"
                value={storeLocation.state}
                onChange={(e) =>
                  setStoreLocation({
                    ...storeLocation,
                    state: e.target.value,
                  })
                }
              />
            </div>
            <div className="tw-flex tw-flex-col tw-relative">
              <label
                htmlFor="city"
                className="tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 
            "
              >
                city
              </label>
              <Input
                id="city"
                type="text"
                placeholder="city"
                className="tw-rounded-sm tw-w-full tw-mt-2"
                size="large"
                value={storeLocation.city}
                onChange={(e) =>
                  setStoreLocation({
                    ...storeLocation,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div className="tw-flex tw-flex-col tw-relative">
              <label
                htmlFor="landmark"
                className="tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 
            "
              >
                Phone Number
              </label>
              <Input
                id="landmark"
                type="text"
                placeholder="landmark"
                className="tw-rounded-sm tw-w-full"
                size="large"
                value={storeLocation.landmark}
                onChange={(e) =>
                  setStoreLocation({
                    ...storeLocation,
                    landmark: e.target.value,
                  })
                }
              />
            </div>
            <div className="tw-flex tw-flex-col tw-relative">
              <label
                htmlFor="lga"
                className="tw-text-base tw-text-gray-kwek200 tw-font-medium tw-capitalize tw-mb-2 
            "
              >
                lga address
              </label>
              <Input
                id="lga"
                type="text"
                placeholder="lga"
                className="tw-rounded-sm tw-w-full tw-mt-2"
                size="large"
                value={storeLocation.lga}
                onChange={(e) =>
                  setStoreLocation({
                    ...storeLocation,
                    lga: e.target.value,
                  })
                }
              />
            </div>
          </section>
          {loading && <Load />}
          <div className="tw-flex tw-justify-end tw-mt-7">
            <button
              className="tw-bg-red-kwek100 tw-text-white-100 tw-rounded-md tw-py-3 tw-px-10"
              onClick={() => updateLocation()}
            >
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
