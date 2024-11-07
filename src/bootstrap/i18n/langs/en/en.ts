import langKey from "~/bootstrap/i18n/langKey";

const en: typeof langKey = {
  global: {
    ru: "RU",
    en: "EN",
    ar: "AR",
    createAccount: "Create account",
    login: "Login",
    hotels: "Hotels",
    chalets: "Chalets",
    halls: "Halls",
    apartments: "Apartments",
    more: "More",
    bookNow: "Book now",
    copyRight: "All rights reserved © 2016-2024 Hajzi",
    noPictures: "Photos are not available",
  },

  mainPage: {
    signinOrSignup: "Sign in or sign up",
    username: "Username",
    email: "Email",
    password: "Password",
    haveAnAccount: "Already have an account?",
    surf: "Browse ",
    count: "Number: ",
    accommodationsCardsTitle: "Find your perfect getaway in Yemen",
  },
  detailsPage: {
    share: "Share",
    successCopyMessage: "Successfully copied",
    seeMorePhoto: "See more photos",
    watchVideo: "ًWatch video",
    features: "Feature",
    conditions: "Condition",
    map: "Map",
    reviews: "Review",
    featuresAccessories: "Features and accessories",
    /* ---------------------------------- tabs ---------------------------------- */
    noFeaturesToShow: "There are no features to display",
    noReviewsToShow: "There are no reviews to view",
    bookingAndCancelingConditions: "Booking and canceling conditions",
    bookingConditions: "Booking conditions",
    cancelingConditions: "Canceling conditions",
    noBookingAndCancelingConditions:
      "detailsPage.noBookingAndCancelingConditions",
    noMapProvided: "The location on map is not provided",
    /* ------------------------------ booking card ------------------------------ */
    bookingStartDate: "Booking starts from:",
    bookingEndDate: "Booking ends at:",

    readAndConfirmConditions: "Please read and agree to the terms",
    totalAllDays: "Total all days",
    fees: "Fees",
    residentName: "Resident name",
    residentPhoneNumber: "Resident phone number",
    confirmConditionsBeforePaying: "Confirm conditions before paying",
    writeResidentInfoMessage: "write resident information please",

    loginOrSignUpToContinue: "Please create an account and log in to continue",
    successfulPaymentMessage:
      "Your request has been sent successfully, please review your email",
    errorPaymentMessage: "Payment failed, please try again",

    successfulContactUsMessage: "The message was sent successfully",
    errorContactUsMessage: "Message sending failed",

    /* ----------------------------- review section ----------------------------- */
    writeReview: "Write review",
    yourReview: "Your review",
    send: "Send",
    reviewSent: "Your review has been successfully submitted",
    writeReviewAndSetStars: "Please specify the stars and write a review",
  },
  search: {
    searchForAnyHotel: "Search for any hotel",
    searchForAnyChalet: "Search for any chalet",
    searchForAnyHall: "Search for any hall",
    ratingRange: "Rating from 1 to 5",
    writeCity: "City name",
    arriveDate: "Arrival date",
    leaveDate: "Leave date",
    priceFrom: "Price from",
    priceTo: "Price to",
    writePrice: "Write price",
  },
  support: {
    termsOfUse: "Terms of use",
    privacyPolicy: "Privacy policy",
  },
};

export default en;
