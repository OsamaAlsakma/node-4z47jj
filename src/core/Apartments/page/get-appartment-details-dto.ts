import {
  ResservedDateType,
  ReviewResponse,
} from "~/bootstrap/helper/global-types";
import { AppartmentDetailType } from "~/core/Apartments/page/appartment-details-page";

export type AppartmentDetailsResponse = {
  accommodation: {
    id: string;
    name: string;
    location?: string;
    description: string;
    numberOfRooms?: string;
    pricePerNight: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    images: { attachmentPath: string }[];
    video: { url: string }[];
    features: { name: string }[];

    bookingConditions: string;
    cancellingConditions: string;
    reviews: ReviewResponse[];
    reservations: ResservedDateType[];
  };
};

export const getAppartmentDetailsDTO = (
  response: AppartmentDetailsResponse
): AppartmentDetailType => {
  const AppartmentDetailEntity: AppartmentDetailType = {
    id: response.accommodation.id,
    name: response.accommodation.name,
    images: response.accommodation.images.map((image) => image.attachmentPath),
    videos: response.accommodation.video.map((video) => video.url),
    description: response.accommodation.description,
    coordinates: {
      latitude: response.accommodation.coordinates.latitude,
      longitude: response.accommodation.coordinates.longitude,
    },
    features: response.accommodation.features.map((feature) => feature.name),

    // fast description
    numberOfRooms: response.accommodation.numberOfRooms,
    location: response.accommodation.location,
    pricePerNight: response.accommodation.pricePerNight,

    bookingConditions: response.accommodation.bookingConditions,
    cancellingConditions: response.accommodation.cancellingConditions,
    reviews: response.accommodation.reviews.map((review) => ({
      givenStars: review.rating,
      reviewBody: review.comment,
      reviewerName: review.user?.name || "مقيم",
    })),
    // TODO to be fixed
    reservedDates: [],
  };
  return AppartmentDetailEntity;
};
