import { BarChart3, ChartColumn, FileText, HandCoins, Landmark, PieChart, Receipt, ReceiptText, ShieldCheck, Users, Wallet, WandSparkles } from "lucide-react";

export const sidebarNav = [
  {
    "id": "finance",
    "label": "Finance",
    "icon": Wallet,
    "path": "/finance",
    "isOpen": false,
    "isSelected": false,
    "hasChildren": false,
    "children": []
  },
  {
    "id": "sales-crm",
    "label": "Sales CRM",
    "icon": PieChart,
    "path": "/sales-crm",
    "isOpen": false,
    "isSelected": false,
    "hasChildren": false,
    "children": []
  },
  {
    "id": "rms",
    "label": "RMS",
    "icon": Landmark,
    "path": "/rms",
    "isOpen": true,
    "isSelected": true,
    "hasChildren": true,
    "children": [
      {
        "id": "dashboard",
        "parentId": "rms",
        "label": "Dashboard",
        "icon": ChartColumn,
        "path": "/rms/dashboard",
        "isSelected": false,
        "hasChildren": false,
        "children": []
      },
      {
        "id": "disbursement",
        "parentId": "rms",
        "label": "Disbursement",
        "icon": HandCoins,
        "path": "/rms/disbursement",
        "isSelected": true,
        "hasChildren": false,
        "children": []
      },
      {
        "id": "invoices",
        "parentId": "rms",
        "label": "Invoices",
        "icon": Receipt,
        "path": "/rms/invoices",
        "isSelected": false,
        "hasChildren": false,
        "children": []
      },
      {
        "id": "po",
        "parentId": "rms",
        "label": "PO",
        "icon": ReceiptText,
        "path": "/rms/po",
        "isSelected": false,
        "hasChildren": false,
        "children": []
      },
      {
        "id": "rms-reports",
        "parentId": "rms",
        "label": "RMS Reports",
        "icon": BarChart3,
        "path": "/rms/reports",
        "isSelected": false,
        "hasChildren": false,
        "children": []
      }
    ]
  },
  {
    "id": "compliance",
    "label": "Compliance",
    "icon": ShieldCheck,
    "path": "/compliance",
    "isOpen": false,
    "isSelected": false,
    "hasChildren": true,
    "children": [
       {
        "id": "disbursement",
        "parentId": "rms",
        "label": "Disbursement",
        "icon": HandCoins,
        "path": "/rms/disbursement",
        "isSelected": true,
        "hasChildren": false,
        "children": []
      },
      {
        "id": "invoices",
        "parentId": "rms",
        "label": "Invoices",
        "icon": Receipt,
        "path": "/rms/invoices",
        "isSelected": false,
        "hasChildren": false,
        "children": []
      },
      {
        "id": "invoices",
        "parentId": "rms",
        "label": "Invoices",
        "icon": Receipt,
        "path": "/rms/invoices",
        "isSelected": false,
        "hasChildren": false,
        "children": []
      },
      {
        "id": "invoices",
        "parentId": "rms",
        "label": "Invoices",
        "icon": Receipt,
        "path": "/rms/invoices",
        "isSelected": false,
        "hasChildren": false,
        "children": []
      },
      {
        "id": "invoices",
        "parentId": "rms",
        "label": "Invoices",
        "icon": Receipt,
        "path": "/rms/invoices",
        "isSelected": false,
        "hasChildren": false,
        "children": []
      },
      {
        "id": "invoices",
        "parentId": "rms",
        "label": "Invoices",
        "icon": Receipt,
        "path": "/rms/invoices",
        "isSelected": false,
        "hasChildren": false,
        "children": []
      },
    ]
  },
  {
    "id": "vendors",
    "label": "Vendors",
    "icon": Users,
    "path": "/vendors",
    "isOpen": false,
    "isSelected": false,
    "hasChildren": false,
    "children": []
  },
  {
    "id": "ai-suite",
    "label": "AI Suite",
    "icon": WandSparkles,
    "path": "/ai-suite",
    "isOpen": false,
    "isSelected": false,
    "hasChildren": false,
    "children": []
  },
  {
    "id": "reports",
    "label": "Reports",
    "icon": FileText,
    "path": "/reports",
    "isOpen": false,
    "isSelected": false,
    "hasChildren": false,
    "children": []
  }
]