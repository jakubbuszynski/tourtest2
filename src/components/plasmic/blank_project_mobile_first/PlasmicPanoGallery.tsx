// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9eiWo8Eadwtw46zacr9r4i
// Component: Bn93SDaxd4
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import PanoViewer from "../../PanoViewer"; // plasmic-import: IPSKWCy1bK/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: 9eiWo8Eadwtw46zacr9r4i/projectcss
import * as sty from "./PlasmicPanoGallery.module.css"; // plasmic-import: Bn93SDaxd4/css

export type PlasmicPanoGallery__VariantMembers = {};

export type PlasmicPanoGallery__VariantsArgs = {};
type VariantPropType = keyof PlasmicPanoGallery__VariantsArgs;
export const PlasmicPanoGallery__VariantProps = new Array<VariantPropType>();

export type PlasmicPanoGallery__ArgsType = {};
type ArgPropType = keyof PlasmicPanoGallery__ArgsType;
export const PlasmicPanoGallery__ArgProps = new Array<ArgPropType>();

export type PlasmicPanoGallery__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPanoGalleryProps {
  className?: string;
}

function PlasmicPanoGallery__RenderFunc(props: {
  variants: PlasmicPanoGallery__VariantsArgs;
  args: PlasmicPanoGallery__ArgsType;
  overrides: PlasmicPanoGallery__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__tuO5J)}>
        <div className={classNames(defaultcss.all, sty.box__qq0F5)}>
          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__cOd1W)}
          />

          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__zDlrH)}
          />

          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__eiSQi)}
          />
        </div>

        <div className={classNames(defaultcss.all, sty.box__ygmPz)}>
          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__nw8Vi)}
          />

          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__gAn8M)}
          />

          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__ekqr5)}
          />
        </div>

        <div className={classNames(defaultcss.all, sty.box__jVmDa)}>
          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__hVuMi)}
          />

          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__nE32O)}
          />

          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer___7Ae3Y)}
          />
        </div>

        <div className={classNames(defaultcss.all, sty.box___12YrT)}>
          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__iHvCl)}
          />

          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__upQjq)}
          />

          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__gTToZ)}
          />
        </div>

        <div className={classNames(defaultcss.all, sty.box__jDeWv)}>
          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__cJp)}
          />

          <PanoViewer
            className={classNames("__wab_instance", sty.panoViewer__rKsQf)}
          />

          <PanoViewer
            _new={"_new" as const}
            className={classNames("__wab_instance", sty.panoViewer__bdMUu)}
          />
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPanoGallery__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicPanoGallery__VariantsArgs;
  args?: PlasmicPanoGallery__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicPanoGallery__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicPanoGallery__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPanoGallery__ArgProps,
      internalVariantPropNames: PlasmicPanoGallery__VariantProps
    });

    return PlasmicPanoGallery__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanoGallery";
  } else {
    func.displayName = `PlasmicPanoGallery.${nodeName}`;
  }
  return func;
}

export const PlasmicPanoGallery = Object.assign(
  // Top-level PlasmicPanoGallery renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPanoGallery
    internalVariantProps: PlasmicPanoGallery__VariantProps,
    internalArgProps: PlasmicPanoGallery__ArgProps
  }
);

export default PlasmicPanoGallery;
/* prettier-ignore-end */