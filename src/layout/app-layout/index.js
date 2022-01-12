import React from "react";
import AppViews from "views/app-views";
const AppLayout = () => {
  return (
    <>
      <div>Header</div>
      <div>
        <AppViews />
      </div>
      <div>Footer</div>
    </>
  );
};

export default AppLayout;
