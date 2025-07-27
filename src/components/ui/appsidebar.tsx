import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import React, {ReactNode} from "react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Ask Bot",
    url: "/bot",
    icon: Inbox,
  }
]

interface AppsidebarProps {
  children: ReactNode;
}

export default function Appsidebar({children}: AppsidebarProps){
    return(
        <div>
            <Sidebar >
                <SidebarHeader className="text-2xl mx-auto mb-3.5 font-medium">
                    LegalDoc
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-xl">Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                      <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                          <item.icon />
                                          <span className="text-sm font-medium">{item.title}</span>
                                        </a>
                                      </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))} 
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter className="items-center">
                    <h1>© 2025 LegalDoc.</h1>
                    <h1> All rights reserved.</h1>
                </SidebarFooter>
            </Sidebar>
            {children}
        </div>
    )
}