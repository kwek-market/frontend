import { SidebarProps } from "@/interfaces/commonTypes";
import { Rate } from "antd";
import React from "react";
import styles from "./Sidebar.module.scss";

export function Rating({ setFiltering, filtering }: SidebarProps) {
  return (
    <div className={styles.sidebar_content}>
      <p className={styles.header}>PRODUCT RATING</p>
      <div className={styles.subMenu}>
        <div className={styles.checkSub}>
          <input
            className={styles.inputRound}
            name="rating"
            type="radio"
            value={5}
            onChange={(e) =>
              setFiltering({ ...filtering, rating: parseInt(e.target.value) })
            }
          />
          <div className="tw-flex tw-justify-center tw-items-center tw-ml-2">
            <Rate disabled defaultValue={5} style={{ fontSize: "1rem" }} />
          </div>
        </div>
        <div className={styles.checkSub}>
          <input
            className={styles.inputRound}
            name="rating"
            type="radio"
            value={4}
            onChange={(e) =>
              setFiltering({ ...filtering, rating: parseInt(e.target.value) })
            }
          />
          <div className="tw-flex tw-justify-center tw-items-center tw-ml-2">
            <Rate disabled defaultValue={4} style={{ fontSize: "1rem" }} />
            <p className="tw-text-base">& Above</p>
          </div>
        </div>
        <div className={styles.checkSub}>
          <input
            className={styles.inputRound}
            name="rating"
            type="radio"
            value={3}
            onChange={(e) =>
              setFiltering({ ...filtering, rating: parseInt(e.target.value) })
            }
          />
          <div className="tw-flex tw-justify-center tw-items-center tw-ml-2">
            <Rate disabled defaultValue={3} style={{ fontSize: "1rem" }} />
            <p className="tw-text-base">& Above</p>
          </div>
        </div>
        <div className={styles.checkSub}>
          <input
            className={styles.inputRound}
            name="rating"
            type="radio"
            value={2}
            onChange={(e) =>
              setFiltering({ ...filtering, rating: parseInt(e.target.value) })
            }
          />
          <div className="tw-flex tw-justify-center tw-items-center tw-ml-2">
            <Rate disabled defaultValue={2} style={{ fontSize: "1rem" }} />
            <p className="tw-text-base">& Above</p>
          </div>
        </div>
        <div className={styles.checkSub}>
          <input
            className={styles.inputRound}
            name="rating"
            type="radio"
            value={1}
            onChange={(e) =>
              setFiltering({ ...filtering, rating: parseInt(e.target.value) })
            }
          />
          <div className="tw-flex tw-justify-center tw-items-center tw-ml-2">
            <Rate disabled defaultValue={1} style={{ fontSize: "1rem" }} />
            <p className="tw-text-base">& Above</p>
          </div>
        </div>
      </div>
    </div>
  );
}
