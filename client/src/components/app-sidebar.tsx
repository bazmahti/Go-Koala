import { useLocation, Link } from "wouter";
import {
  Home, Users, BookOpen, Gamepad2, Monitor, Palette, Target
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Characters", url: "/characters", icon: Users },
  { title: "Story Episodes", url: "/story", icon: BookOpen },
  { title: "Game Design", url: "/game-design", icon: Gamepad2 },
  { title: "Audience", url: "/audience", icon: Target },
  { title: "Platform & Tech", url: "/platform", icon: Monitor },
  { title: "Stylistic Vision", url: "/style", icon: Palette },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer" data-testid="link-sidebar-home">
            <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
              <img
                src="/images/ko-koala.png"
                alt="Ko the Koala"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h2 className="font-serif font-bold text-sm leading-tight truncate">GO KOALA!</h2>
              <p className="text-[11px] text-sidebar-foreground/60 truncate">S'uNReel 2026</p>
            </div>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Proposal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = location === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      data-testid={`nav-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Link href={item.url}>
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-[11px] text-sidebar-foreground/50 space-y-1">
          <p>Ralph Lycett Tyrrell</p>
          <p>Dr Baz (Barry Ferrier)</p>
          <Badge variant="outline" className="text-[10px] mt-1 border-sidebar-border text-sidebar-foreground/50">
            Proposal 2026
          </Badge>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
