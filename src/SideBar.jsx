import React from 'react'
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const SideBar = (props) => {
  return (
    <Navigation
      // you can use your own router's api to get pathname
      activeItemId="/management/members"
      onSelect={(item) => {
        props.routerRef.current.history.push(item.itemId)
        props.toggleSideNav()
      }}
      items={[
        {
          title: 'Dashboard',
          itemId: '/',
          // you can use your own custom Icon component as well
          // icon is optional
          // elemBefore: () => <Icon name="users" />
        },
        {
          title: 'Jobs',
          itemId: '/myjobs',
          // elemBefore: () => <Icon name="users" />,
        },
        {
          title: 'Product Catalog',
          itemId: '/Catalog',
        },
        {
          title: 'Assigned Jobs',
          itemId: '/AssignedJobs',
        },
        {
          title: 'New User',
          itemId: '/Newuser',
        },
        {
          title: 'Product Request',
          itemId: '/NewProducts',
        },
        {
          title: 'User Request',
          itemId: '/UserRequest',
        },
      ]}
    />
  );
}

export default SideBar