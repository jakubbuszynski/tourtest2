// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9eiWo8Eadwtw46zacr9r4i
// Component: R8K1Ax2vgj
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: 9eiWo8Eadwtw46zacr9r4i/projectcss
import * as sty from "./PlasmicPanoMenu.module.css"; // plasmic-import: R8K1Ax2vgj/css

import DoorOpensvgIcon from "./icons/PlasmicIcon__DoorOpensvg"; // plasmic-import: p1cqKS3Zbj/icon

export type PlasmicPanoMenu__VariantMembers = {};

export type PlasmicPanoMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicPanoMenu__VariantsArgs;
export const PlasmicPanoMenu__VariantProps = new Array<VariantPropType>();

export type PlasmicPanoMenu__ArgsType = {};
type ArgPropType = keyof PlasmicPanoMenu__ArgsType;
export const PlasmicPanoMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicPanoMenu__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultPanoMenuProps {
  className?: string;
}

function PlasmicPanoMenu__RenderFunc(props: {
  variants: PlasmicPanoMenu__VariantsArgs;
  args: PlasmicPanoMenu__ArgsType;
  overrides: PlasmicPanoMenu__OverridesType;
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
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      >
        <DoorOpensvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(defaultcss.all, sty.svg)}
          role={"img"}
        />

        <button
          className={classNames(
            defaultcss.button,
            defaultcss.__wab_text,
            sty.button__wtXhv
          )}
        >
          {"New Sphere"}
        </button>

        <button
          className={classNames(
            defaultcss.button,
            defaultcss.__wab_text,
            sty.button__uarVa
          )}
        >
          {"Select Sphere"}
        </button>

        <button
          className={classNames(
            defaultcss.button,
            defaultcss.__wab_text,
            sty.button__pAFqR
          )}
        >
          {"Select Room"}
        </button>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box", "svg"],
  box: ["box", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPanoMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicPanoMenu__VariantsArgs;
  args?: PlasmicPanoMenu__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicPanoMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicPanoMenu__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPanoMenu__ArgProps,
      internalVariantPropNames: PlasmicPanoMenu__VariantProps
    });

    return PlasmicPanoMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanoMenu";
  } else {
    func.displayName = `PlasmicPanoMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicPanoMenu = Object.assign(
  // Top-level PlasmicPanoMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicPanoMenu
    internalVariantProps: PlasmicPanoMenu__VariantProps,
    internalArgProps: PlasmicPanoMenu__ArgProps
  }
);

export default PlasmicPanoMenu;
/* prettier-ignore-end */
