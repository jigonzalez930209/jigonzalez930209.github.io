import * as React from 'react'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { AspectRatio } from './ui/aspect-ratio'

// tabs

const ProjectTabs = ({ ...props }) => {
  console.log(props)
  return (
    <Tabs defaultValue="project-info" className="w-full">
      <TabsList className="grid w-1/3 grid-cols-2">
        <TabsTrigger value="project-info">Project Info</TabsTrigger>
        <TabsTrigger value="atom-info">Atom Info</TabsTrigger>
      </TabsList>
      <TabsContent value="project-info">
        Project Info
        <ResizablePanels />
      </TabsContent>
      <TabsContent value="atom-info">
        atom-info
        <ResizablePanels />
      </TabsContent>
    </Tabs>
  )
}

// aspect ratio

const Image = ({ ...props }) => {
  console.log(props)
  return <AspectRatio {...props}></AspectRatio>
}

// resizable panels

const ResizablePanels = ({ ...props }) => {
  console.log(props)
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border  h-full"
    >
      <ResizablePanel
        defaultSize={40}
        onResize={(e) => console.log(e)}
        onResizeCapture={(e) => console.log({ onResizeCapture: e })}
      >
        <div className="flex h-[75vh] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={40}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={60}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export { ProjectTabs, Image, ResizablePanels }
