// src/data/projectData.js
import {
  Building2,
  Home,
  Landmark,
  Globe,
  Store,
  LayoutGrid,
} from "lucide-react";

export const categories = [
  "All",
  "Residential",
  "Commercial",
  "Govt Affiliates",
];

export const iconMap = {
  Residential: <Home className="text-blue-500 w-6 h-6" />,
  Commercial: <Building2 className="text-blue-500 w-6 h-6" />,
  "Govt Affiliates": <Landmark className="text-blue-500 w-6 h-6" />,
  Exhibitions: <Globe className="text-blue-500 w-6 h-6" />,
  Stalls: <Store className="text-blue-500 w-6 h-6" />,
  All: <LayoutGrid className="text-blue-500 w-6 h-6" />,
};
export const projects = [
  {
    id: 1,
    title: "Ansal sonipoat",
    category: "Residential",
    kwp: "N/A",
    image: "/Images/Project1.webp",
  },
  {
    id: 2,
    title: "BKT Bhiwandi",
    category: "Commercial",
    kwp: "N/A",
    image: "/Images/Project2.webp",
  },
  {
    id: 3,
    title: "Kumhera Net Zero Village",
    category: "Govt Affiliates",
    kwp: "450",
    image: "/Images/gove2.webp",
  },
  {
    id: 4,
    title: "LR College",
    category: "Commercial",
    kwp: "1000",
    image: "/Images/Project6.webp",
  },
  {
    id: 5,
    title: "Orient System",
    category: "Commercial",
    kwp: "1450",
    image: "/Images/Project7.webp",
  },
  {
    id: 6,
    title: "PVS Polymers",
    category: "Commercial",
    kwp: "100",
    image: "/Images/Project8.webp",
  },
  {
    id: 7,
    title: "Rangeeli Mahal Barsana",
    category: "Residential",
    kwp: "100",
    image: "/Images/Project9.webp",
  },
  {
    id: 8,
    title: "Build Bharat Expo",
    category: "Exhibitions and stalls",
    kwp: "N/A",
    image: "/Images/stall4.webp",
  },
  {
    id: 9,
    title: "Utkarsh ke 8 varsh Kavi Nagar Event",
    category: "Exhibitions and stalls",
    kwp: "N/A",
    image: "/Images/stall7.webp",
  },
  {
    id: 10,
    title: "Build Bharat Expo",
    category: "Exhibitions and stalls",
    kwp: "N/A",
    image: "/Images/so1.webp",
  },
  {
    id: 11,
    title: "Utkarsh ke 8 varsh Kavi Nagar Event",
    category: "Exhibitions and stalls",
    kwp: "N/A",
    image: "/Images/gove3.webp",
  },
  {
    id: 12,
    title: "MGR Exhibition",
    category: "Exhibitions and stalls",
    kwp: "N/A",
    image: "/Images/so3.webp",
  },
  {
    id: 13,
    title: "Ashish Jain",
    category: "Residential",
    kwp: "N/A",
    image: "/Images/ashish_jain_kavi_nagar_7kw_resedential.webp",
  },
  {
    id: 14,
    title: "OS cool Home",
    category: "Commercial",
    kwp: "N/A",
    image: "/Images/res.webp",
  },
];
