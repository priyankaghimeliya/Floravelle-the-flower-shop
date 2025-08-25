import { motion } from "framer-motion";
import type { ComponentType } from "react";

type Props = {
  Component: ComponentType<any>;
};

const transition =
  ({ Component }: Props) => // fix: destructure Component, not OgComponent
  () => (
    <>
      <Component />
    </>
  );