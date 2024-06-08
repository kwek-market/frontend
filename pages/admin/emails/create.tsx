import BreadCrumbs from "@/components/admin/breadcrumbs";
import { FormHead, FormItems } from "@/components/admin/form";
import { InputField, TextField } from "@/components/input/textInput";
import { AdminLayout } from "@/layouts";
import { message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SearchSelectInput } from "../../../components/input/SelectSearchInput";
import { userFetcherWithAuth } from "../../../helpers";
import { ISendEmail, useAdminSendEmails } from "../../../hooks/admin/email";
import { GET_CUSTOMERS } from "../../../store/admin/admin.queries";
import { RootState } from "../../../store/rootReducer";
import { SendEmailSchema } from "../../../validations/sendEmailSchema";

interface IFormData {
  subject?: string;
  template?: string;
  userList?: string[];
}

const CreateEmail = () => {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);

  const [formData, setFormData] = useState<IFormData>({});
  const { mutate: createMut } = useAdminSendEmails(token);

  const sendMail = async e => {
    e.preventDefault();

    const parsed = await SendEmailSchema.safeParseAsync(formData);

    if (parsed.success !== true) {
      message.error(parsed.error.errors[0].message);
      return;
    }

    try {
      console.log("🚀 ~~ sendMail ~~ parsed.data:", parsed.data);
      createMut({ ...parsed.data, token } as ISendEmail, {
        onError: (err: Error) => {
          message.error(err.message);
        },
      });
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <AdminLayout>
      <BreadCrumbs
        items={[
          { name: "Dashboard", path: "/admin/dashboard" },
          {
            name: "Create Email",
            path: "/admin/emails/create",
          },
        ]}
        header='Create Email'
      />
      <form className=' tw-mt-16 tw-font-poppins' onSubmit={e => e.preventDefault()}>
        <FormHead>Basic Information</FormHead>

        <FormItems>
          <div className='tw-space-y-2'>
            <label className=' tw-font-medium'>Select Users (You can select multiple users)</label>
            <SearchSelectInput
              fetchOptions={search => fetchUsersList(search, token)}
              placeholder='Search the user and select'
              onChange={values => {
                setFormData({ ...formData, userList: values.map(value => value.value) });
              }}
              mode='multiple'
            />
          </div>

          <div className='tw-space-y-2'>
            <InputField
              label='Subject'
              placeholder='Write your the subject of the email'
              type='text'
              onChange={e => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>

          <div className='tw-space-y-2'>
            <TextField
              label='Message (Note: if you want to reference the user name, you write it in this syntax {{user.full_name}})'
              placeholder='Write a message here, (you can also write HTML codes here)'
              onChange={e => setFormData({ ...formData, template: e.target.value })}
            />
          </div>
        </FormItems>

        <button
          className='  tw-font-semibold tw-py-2 tw-px-12 tw-rounded tw-text-white-100 tw-bg-[#1E944D] tw-mt-14'
          type='submit'
          onClick={sendMail}
        >
          Send Email
        </button>
      </form>
    </AdminLayout>
  );
};

async function fetchUsersList(search: string, token?: string): Promise<any[]> {
  try {
    const result = await userFetcherWithAuth(
      GET_CUSTOMERS,
      { search, token, page: 1, pageSize: 500 },
      token
    );

    return result?.getUserType?.objects?.map(user => ({
      label: `${user.fullName}`,
      value: user.id,
    }));
  } catch (error) {
    console.error(error);
  }
}

export default CreateEmail;
