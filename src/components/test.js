{location.pathname !== "/booking/checkout" ||
        (location.pathname === "/booking/checkout" && lg && (
          <Link
            onClick={(event) => {
              if (lg) event.preventDefault();
              dispatch({
                type: "SET_BOOKING_BOOKWITHSTAFF",
                bookWithStaff: true,
              });
            }}
            to={staffLink}
            className="flex bg-secondaryBg lg:cursor-default lg:bg-white w-full rounded-lg lg:flex-col items-center shadow-md"
          >
            {/*  Avater of employe/Picture of store */}
            <div className="flex justify-center items-center ml-3 mr-2 py-2 lg:px-10 lg:p-8 lg:pt-10 lg:mr-0">
              {firstParamemploye ? (
                <EmployeAvatar text={firstParamemploye.name} />
              ) : (
                <StorePicture
                  storeLink={storeLink}
                  storeImage={storeImages[0]}
                />
              )}
            </div>
            {/* Infos about Employe/ Store */}
            <div className="flex flex-col lg:items-center py-2">
              <div className="font-medium text-lg  px-3 lg:px-10 text-left">
                {firstParamemploye ? firstParamemploye.name : storeName}
              </div>
              <p className="text-secondarytextColor lg:my-2 px-3 lg:px-10 text-left line-clamp-2 lg:line-clamp-none">
                {firstParamemploye && storeName + ", "}
                {storeLocation}
              </p>
              {firstParamemploye && (
                <BookingChooseOtherStaffButton staffLink={staffLink} />
              )}
              <div className="hidden w-full lg:flex flex-col items-center">
                <HorGrayLine style={{ marginTop: 0, marginBottom: 0 }} />
                {booking.time && (
                  <>
                    <BookingInfoTime />
                    <HorGrayLine style={{ marginTop: 0, marginBottom: 0 }} />
                  </>
                )}
                {booking.services.length > 0 ? (
                  <div className="max-h-[20vh] overflow-auto">
                    <BookingInfoServices />
                  </div>
                ) : (
                  <div className="flex items-center justify-center py-4 text-secondarytextColor text-center">
                    No services selected yet
                  </div>
                )}
                <HorGrayLine style={{ marginTop: 0, marginBottom: 0 }} />
                <BookingInfoTotal
                  className="w-full px-10 py-md"
                  selectedServices={selectedServices}
                />
              </div>
            </div>
          </Link>
        ))}

        <>
        {/* {displayStaff && !displayServices && (
          <div className="bg-white text-black rounded-lg lg:py-4 shadow-md">
            here
            <Staff />
          </div>
        )} */}
        {/* { */}
        {/* // !displayStaff &&
        //   !displayServices &&
        //   location.pathname == "/booking/checkout" && ( */}
            {/* <BookingStickyCol> */}
              <div className="bg-white text-black rounded-lg lg:py-4 shadow-md">
                <Outlet />
              </div>
            {/* </BookingStickyCol> */}
          {/* // )} */}
        {/* {!displayStaff &&
          !displayServices &&
          location.pathname !== "/booking/checkout" && (
            <div className="bg-white text-black rounded-lg shadow-md">
              
              <Outlet />
            </div>
          )} */}
        {/* {/* {location.pathname === "/booking/notes" && (
          <div className="bg-white text-black rounded-lg lg:py-4 shadow-md">
            <Checkout />
          </div>
        )} */}
        {/* {displayServices && (
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <ServicesList />
          </div>
        )}  */}
      </>