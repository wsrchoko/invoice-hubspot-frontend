// components
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Software",
    path: "#",
    icon: <Iconify icon={"eva:file-fill"} {...ICON_SIZE} />,
    children: [],
  },
  {
    title: "Pricing",
    icon: <Iconify icon={"ic:round-grain"} {...ICON_SIZE} />,
    path: "#",
  },
  {
    title: "Resources",
    path: "#",
    icon: <Iconify icon={"eva:file-fill"} {...ICON_SIZE} />,
    children: [],
  },
];

export default menuConfig;
