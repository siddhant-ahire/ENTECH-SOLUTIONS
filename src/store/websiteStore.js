import { create } from "zustand";

const useWebsiteStore = create((set) => ({
  website: {
      website_email: "",
      website_logo: "",
      website_instagram: "",
      website_facebook: "",
      website_twitter: "",
      website_youtube: "",
      website_phone_number: "",
      website_address: "",
      website_address_lat_long: "",
      website_banner_title: "",
      website_banner_pargraph: "",
      website_banner_button_text: "",
      website_banner_about_us_img: "",
      website_banner_about_us_title: "",
      website_banner_about_us_title2: "",
      website_banner_about_us_pargraph: "",
      website_banner_images: [],
      website_banner_cards: []
  },
  setWebsite: (website) => set({ website }),
}));

export default useWebsiteStore;
