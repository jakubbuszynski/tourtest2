// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9eiWo8Eadwtw46zacr9r4i
// Component: IPSKWCy1bK
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
import * as sty from "./PlasmicPanoViewer.module.css"; // plasmic-import: IPSKWCy1bK/css

export type PlasmicPanoViewer__VariantMembers = {
  _new: "_new";
  selection: "selection";
};

export type PlasmicPanoViewer__VariantsArgs = {
  _new?: SingleBooleanChoiceArg<"_new">;
  selection?: SingleBooleanChoiceArg<"selection">;
};

type VariantPropType = keyof PlasmicPanoViewer__VariantsArgs;
export const PlasmicPanoViewer__VariantProps = new Array<VariantPropType>(
  "_new",
  "selection"
);

export type PlasmicPanoViewer__ArgsType = {};
type ArgPropType = keyof PlasmicPanoViewer__ArgsType;
export const PlasmicPanoViewer__ArgProps = new Array<ArgPropType>();

export type PlasmicPanoViewer__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<"button">;
};

export interface DefaultPanoViewerProps {
  _new?: SingleBooleanChoiceArg<"_new">;
  selection?: SingleBooleanChoiceArg<"selection">;
  className?: string;
}

function PlasmicPanoViewer__RenderFunc(props: {
  variants: PlasmicPanoViewer__VariantsArgs;
  args: PlasmicPanoViewer__ArgsType;
  overrides: PlasmicPanoViewer__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__selection]: hasVariant(variants, "selection", "selection")
      })}
    >
      {(hasVariant(variants, "_new", "_new") ? true : false) ? (
        <button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames(
            defaultcss.button,
            defaultcss.__wab_text,
            sty.button,
            { [sty.button___new]: hasVariant(variants, "_new", "_new") }
          )}
        >
          {hasVariant(variants, "_new", "_new") ? "+" : "Click Me"}
        </button>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPanoViewer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicPanoViewer__VariantsArgs;
  args?: PlasmicPanoViewer__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicPanoViewer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicPanoViewer__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPanoViewer__ArgProps,
      internalVariantPropNames: PlasmicPanoViewer__VariantProps
    });

    return PlasmicPanoViewer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPanoViewer";
  } else {
    func.displayName = `PlasmicPanoViewer.${nodeName}`;
  }
  return func;
}

export const PlasmicPanoViewer = Object.assign(
  // Top-level PlasmicPanoViewer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPanoViewer
    internalVariantProps: PlasmicPanoViewer__VariantProps,
    internalArgProps: PlasmicPanoViewer__ArgProps
  }
);

export default PlasmicPanoViewer;
/* prettier-ignore-end */
