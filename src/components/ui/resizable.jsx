/* eslint-disable react/prop-types */
import { GripVertical } from 'lucide-react'
import * as ResizablePrimitive from 'react-resizable-panels'

import { cn } from '@/lib/utils'

const ResizablePanelGroup = ({ className, ...props }) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({ withHandle, className, ...props }) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90',
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from '@/components/ui/resizable'

// export function ResizableDemo() {
//   return (
//     <ResizablePanelGroup
//       direction="horizontal"
//       className="max-w-md rounded-lg border md:min-w-[450px]"
//     >
//       <ResizablePanel defaultSize={50}>
//         <div className="flex h-[200px] items-center justify-center p-6">
//           <span className="font-semibold">One</span>
//         </div>
//       </ResizablePanel>
//       <ResizableHandle />
//       <ResizablePanel defaultSize={50}>
//         <ResizablePanelGroup direction="vertical">
//           <ResizablePanel defaultSize={25}>
//             <div className="flex h-full items-center justify-center p-6">
//               <span className="font-semibold">Two</span>
//             </div>
//           </ResizablePanel>
//           <ResizableHandle />
//           <ResizablePanel defaultSize={75}>
//             <div className="flex h-full items-center justify-center p-6">
//               <span className="font-semibold">Three</span>
//             </div>
//           </ResizablePanel>
//         </ResizablePanelGroup>
//       </ResizablePanel>
//     </ResizablePanelGroup>
//   )
// }
