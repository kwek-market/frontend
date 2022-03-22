import { SidebarProps } from "@/interfaces/commonTypes";
import React from "react";
import styles from "./Sidebar.module.scss";

export function Size({ setFiltering, filtering }: SidebarProps) {
  return (
    <div className={styles.sidebar_content}>
      <p className={styles.header}>SIZE</p>
      <div className={styles.subMenu}>
        <div className={styles.checkSub}>
          <input
            className={styles.inputSquare}
            type="checkbox"
            value="S"
            onChange={(e) => {
              if (e.target.checked) {
                setFiltering({
                  ...filtering,
                  sizes: [...filtering.sizes, e.target.value],
                });
              } else {
                setFiltering({
                  ...filtering,
                  sizes: filtering.sizes.filter(
                    (value) => value !== e.target.value
                  ),
                });
              }
            }}
          />
          <p>S</p>
        </div>
        <div className={styles.checkSub}>
          <input
            className={styles.inputSquare}
            type="checkbox"
            value="M"
            onChange={(e) => {
              if (e.target.checked) {
                setFiltering({
                  ...filtering,
                  sizes: [...filtering.sizes, e.target.value],
                });
              } else {
                setFiltering({
                  ...filtering,
                  sizes: filtering.sizes.filter(
                    (value) => value !== e.target.value
                  ),
                });
              }
            }}
          />
          <p>M</p>
        </div>
        <div className={styles.checkSub}>
          <input
            className={styles.inputSquare}
            type="checkbox"
            value="L"
            onChange={(e) => {
              if (e.target.checked) {
                setFiltering({
                  ...filtering,
                  sizes: [...filtering.sizes, e.target.value],
                });
              } else {
                setFiltering({
                  ...filtering,
                  sizes: filtering.sizes.filter(
                    (value) => value !== e.target.value
                  ),
                });
              }
            }}
          />
          <p>L</p>
        </div>
        <div className={styles.checkSub}>
          <input
            className={styles.inputSquare}
            type="checkbox"
            value="XL"
            onChange={(e) => {
              if (e.target.checked) {
                setFiltering({
                  ...filtering,
                  sizes: [...filtering.sizes, e.target.value],
                });
              } else {
                setFiltering({
                  ...filtering,
                  sizes: filtering.sizes.filter(
                    (value) => value !== e.target.value
                  ),
                });
              }
            }}
          />
          <p>XL</p>
        </div>
        <div className={styles.checkSub}>
          <input
            className={styles.inputSquare}
            type="checkbox"
            value="XXL"
            onChange={(e) => {
              if (e.target.checked) {
                setFiltering({
                  ...filtering,
                  sizes: [...filtering.sizes, e.target.value],
                });
              } else {
                setFiltering({
                  ...filtering,
                  sizes: filtering.sizes.filter(
                    (value) => value !== e.target.value
                  ),
                });
              }
            }}
          />
          <p>XXL</p>
        </div>
        <div className={styles.checkSub}>
          <input
            className={styles.inputSquare}
            type="checkbox"
            value="XXXL"
            onChange={(e) => {
              if (e.target.checked) {
                setFiltering({
                  ...filtering,
                  sizes: [...filtering.sizes, e.target.value],
                });
              } else {
                setFiltering({
                  ...filtering,
                  sizes: filtering.sizes.filter(
                    (value) => value !== e.target.value
                  ),
                });
              }
            }}
          />
          <p>XXXL</p>
        </div>
      </div>
    </div>
  );
}
