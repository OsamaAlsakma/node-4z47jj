import { ReviewResponse } from "~/bootstrap/helper/global-types";
import { HallDetailType } from "~/core/halls/page/hall-details-page";

export type HallDetailsResponse = {
  accommodation: {
    id: string;
    name: string;
    location?: string;
    description: string;
    numberOfRooms?: string; // capacity
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
    // TODO he needs to add
    // reservations:ResservedDateType[]
  };
};

export const getHallDetailsDTO = (
  response: HallDetailsResponse
): HallDetailType => {
  const HallDetailEntity: HallDetailType = {
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
    bookingConditions: response.accommodation.bookingConditions,
    cancellingConditions: response.accommodation.cancellingConditions,

    // fast description
    capacity: response.accommodation.numberOfRooms,
    location: response.accommodation.location,
    pricePerNight: response.accommodation.pricePerNight,

    reviews: response.accommodation.reviews.map((review) => ({
      givenStars: review.rating,
      reviewBody: review.comment,
      reviewerName: review.user?.name || "مقيم",
    })),
    // TODO to be fixed
    reservedDates: [],
  };
  return HallDetailEntity;
};
