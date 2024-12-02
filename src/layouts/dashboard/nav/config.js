// Component
import { Home, Person, Work, AccountBalanceWallet, Message, Schedule, Gavel, Settings, ExitToApp, Build, Description, LocalOffer, AccountBalance, VideoCall  } from '@mui/icons-material';

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: <Home fontSize="medium" />,
  },
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: <Person fontSize="medium" />,
  },
  {
    title: 'Services',
    path: '/dashboard/services',
    icon: <LocalOffer fontSize="medium" />, // Represents digital services or offerings
  },
  {
    title: 'Projects',
    path: '/dashboard/projects',
    icon: <Work fontSize="medium" />,
  },
  {
    title: 'Proposals',
    path: '/dashboard/proposals',
    icon: <Description fontSize="medium" />,
  },
  {
    title: 'Wallet',
    path: '/dashboard/wallet',
    icon: <AccountBalanceWallet fontSize="medium" />,  },
  {
    title: 'Messages',
    path: '/dashboard/messages',
    icon: <Message fontSize="medium" />,
  },
  {
    title: 'Meetings',
    path: '/dashboard/meetings',
    icon: <VideoCall fontSize="medium" />,
  },
  {
    title: 'Disputes',
    path: '/dashboard/disputes',
    icon: <Gavel fontSize="medium" />,
  },
  {
    title: 'Settings',
    path: '/dashboard/settings',
    icon: <Settings fontSize="medium" />,
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <ExitToApp fontSize="medium" />,
  },
];

export default navConfig;
