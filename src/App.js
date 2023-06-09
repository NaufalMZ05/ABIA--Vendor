import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import Initial from "./pages/intialPage";
import Home from "./pages/Home";
//get review
import GetReviews from "./pages/Get Review/GetReviews";
import PastWedding from "./pages/Get Review/pastWedding";
import FutureWedding from "./pages/Get Review/futureWedding";
import CopyLink from "./pages/Get Review/reviewLink";

// import Settings from "./pages/Settings";
// import ShowCase from "./pages/ShowCase";
import ManageReview from "./pages/ManageReview";
import ReviewWidget from "./pages/Showcase/reviewWidget";
import AwardBadges from "./pages/Showcase/awardBadges";
import Promotions from "./pages/Promotions";
import Shop from "./pages/Shop";
import Enquiries from "./pages/Enquiries";
import MyProfile from "./pages/My Profile/MyProfile";
import BusinessSetting from "./pages/Settings/businessSettings";
import UpdateListing from "./pages/Settings/updateListing";
import upgradeNow from "./pages/upgradeNow";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<Home />} />
        {/* Get review */}
        <Route path="/get-reviews" element={<GetReviews />} />
        <Route path="/get-reviews/past-wedding" element={<PastWedding />} />
        <Route path="/get-reviews/future-wedding" element={<FutureWedding />} />
        <Route path="/get-reviews/copy-link" element={<CopyLink />} />

        {/* <Route path="/showcase" element={<ShowCase />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
        <Route path="/manage-review" element={<ManageReview />} />
        <Route path="/showcase/review-widget" element={<ReviewWidget />} />
        <Route path="/showcase/award-badges" element={<AwardBadges />} />
        <Route
          path="/settings/business-settings"
          element={<BusinessSetting />}
        />
        <Route path="/settings/update-listing" element={<UpdateListing />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/enquiries" element={<Enquiries />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/upgrade" element={<upgradeNow />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
