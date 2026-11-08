// The apps inside Simple Desk, in the app's own order, with the same colors and lucide icons as its Home screen.
import {
  Braces,
  Calculator,
  FileText,
  FileType2,
  Images,
  LayoutDashboard,
  Laugh,
  ListChecks,
  Palette,
  Send,
  Sheet,
} from "lucide-static";

export interface AppInfo {
  id: string;
  name: string;
  icon: string;
  /** CSS color, one of the --tool-* tokens. */
  color: string;
  summary: string;
  /** Docs page under /docs/apps/. */
  slug: string;
}

export const apps: AppInfo[] = [
  {
    id: "markdown",
    name: "Markdown",
    icon: FileText,
    color: "var(--tool-markdown)",
    summary: "Write with a live preview you can type in, an outline, Mermaid diagrams and HTML or PDF export.",
    slug: "markdown",
  },
  {
    id: "csv",
    name: "CSV",
    icon: Sheet,
    color: "var(--tool-csv)",
    summary: "Edit big spreadsheets fast: sort, filter, find and replace, fill series, and keep the file's exact format.",
    slug: "csv",
  },
  {
    id: "pdf",
    name: "PDF",
    icon: FileType2,
    color: "var(--tool-pdf)",
    summary: "Read, search, highlight, sign and fill forms; merge, split, rotate and reorder pages.",
    slug: "pdf",
  },
  {
    id: "paint",
    name: "Paint",
    icon: Palette,
    color: "var(--tool-paint)",
    summary: "Brushes, shapes, text, fill, selections, crop, resize and rotate, for PNG, JPEG, WebP and more.",
    slug: "paint",
  },
  {
    id: "board",
    name: "Board",
    icon: LayoutDashboard,
    color: "var(--tool-board)",
    summary: "A whiteboard with shapes, connectors, sticky notes, comments and templates. Saves as an SVG anyone can open.",
    slug: "board",
  },
  {
    id: "calculator",
    name: "Calculator",
    icon: Calculator,
    color: "var(--tool-calculator)",
    summary: "A scientific calculator with units and fractions, plus graphing with sliders, roots and derivatives.",
    slug: "calculator",
  },
  {
    id: "todo",
    name: "To-do",
    icon: ListChecks,
    color: "var(--tool-todo)",
    summary: "Due dates, reminders and subtasks. Any item can float as a sticky note, even on your desktop.",
    slug: "todo",
  },
  {
    id: "meme",
    name: "Meme Maker",
    icon: Laugh,
    color: "var(--tool-meme)",
    summary: "Popular templates or your own pictures, outlined text, caption bars and stickers, saved as an editable PNG.",
    slug: "meme-maker",
  },
  {
    id: "images",
    name: "Images",
    icon: Images,
    color: "var(--tool-images)",
    summary: "Convert and resize images in bulk, make app icon sets, and turn video clips into GIFs.",
    slug: "images",
  },
  {
    id: "api",
    name: "API client",
    icon: Send,
    color: "var(--tool-api)",
    summary: "Send HTTP requests with variables and environments; import cURL and Postman collections.",
    slug: "api-client",
  },
  {
    id: "json",
    name: "JSON",
    icon: Braces,
    color: "var(--tool-json)",
    summary: "Format, minify, validate and repair JSON, and browse it as a tree.",
    slug: "json",
  },
];
