import { colors } from '@beercode/common-frontend'
import { FolderTree } from '@beercode/react-folder-tree'
import '@storybook/react'
import React from 'react'

import { tree } from '../mocks/react-folder-tree.mocks'

export default {
  title: 'Libs/React Folder Tree',
  component: FolderTree,
}

export const LightFolderTree: Record<string, any> = () => (
  <FolderTree tree={tree} onFileClick={() => {}} theme='light' />
)

export const DarkFolderTree: Record<string, any> = () => (
  <FolderTree tree={tree} onFileClick={() => {}} theme='dark' />
)
DarkFolderTree.parameters = {
  backgrounds: { default: 'dark' },
}

export const CustomLightFolderTre: Record<string, any> = () => (
  <FolderTree
    tree={tree}
    onFileClick={() => {}}
    theme='light'
    overrideTheme={{
      light: {
        textColor: colors.YELLOW_400,
        hover: colors.TEAL_400,
        active: colors.FUCHSIA_500,
        lines: colors.LIME_400,
      },
      dark: {
        textColor: colors.BLUE_400,
        hover: colors.YELLOW_300,
        active: colors.CYAN_400,
        lines: colors.PURPLE_500,
      },
    }}
  />
)

export const CustomDarkFolderTree: Record<string, any> = () => (
  <FolderTree
    tree={tree}
    onFileClick={() => {}}
    theme='dark'
    overrideTheme={{
      light: {
        textColor: colors.YELLOW_900,
        hover: colors.YELLOW_300,
        active: colors.FUCHSIA_500,
        lines: colors.LIME_400,
      },
      dark: {
        textColor: colors.BLUE_400,
        hover: colors.YELLOW_300,
        active: colors.CYAN_400,
        lines: colors.PURPLE_500,
      },
    }}
  />
)
CustomDarkFolderTree.parameters = {
  backgrounds: { default: 'dark' },
}
