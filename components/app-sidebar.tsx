'use client';

import * as React from 'react';
import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  SquareSigma,
  Calculator,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Calculation',
      url: '/calculation',
      icon: Calculator,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '/calculation/history',
        },
      ],
    },
    {
      title: 'Configuration',
      url: '/configuration',
      icon: Settings2,
      items: [
        {
          title: 'Filaments',
          url: '/configuration/filaments',
        },
        {
          title: 'Printers',
          url: '/configuration/printers',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Support',
      url: 'https://github.com/RemcoGoy/CreationCost/',
      icon: LifeBuoy,
      newPage: true,
    },
    {
      title: 'Feedback',
      url: 'https://github.com/RemcoGoy/CreationCost/issues',
      icon: Send,
      newPage: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <SquareSigma className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Creation Cost</span>
                  <span className="truncate text-xs">Calculator</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
