import { useState } from "react";
import StarRating from "../Stars/Stars";
import VerifiedIcon from "@mui/icons-material/Verified";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { CustomizedDialogs } from "../Dialog/Dialog";
import { useTranslation } from "react-i18next";

export interface CardProps {
  author: string;
  rating: number;
  availability: boolean;
  title: string;
  description: string;
  genre: Array<string>;
  price: string;
}

export function Card({
  author,
  rating,
  availability,
  title,
  description,
  genre,
  price,
}: CardProps) {
  const { t } = useTranslation();
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-full h-full md:max-w-[270px] md:h-[420px] aspect-[2/3] flex flex-col rounded-lg shadow-lg p-5 space-y-3 border border-gray-100 "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchMove={() => setHover(!hover)}
      data-testid="card-book"
    >
      <div className="w-full h-full flex items-center justify-center bg-[#F5F5F5] rounded-lg p-2 transition-all duration-300">
        {hover ? (
          <div className="w-full h-full flex flex-col justify-around items-center">
            <div className="flex flex-col space-y-2 text-sm text-gray-600 p-3">
              <div className="flex flex-col">
                <p className="font-bold">{t("synopsis")}</p>
                <p>{description}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">{t("gender")}</p>
                <p>{genre}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="font-bold">{t("available")}</p>
                {availability ? (
                  <VerifiedIcon sx={{ color: "green" }} fontSize="small" />
                ) : (
                  <NewReleasesIcon sx={{ color: "red" }} fontSize="small" />
                )}
              </div>
              <div className="flex space-x-2">
                <p className="font-bold">{t("price")}</p>
                <p>{price}</p>
              </div>
            </div>
            {availability ? (
              <div className="w-full flex justify-end">
                <CustomizedDialogs
                  title={title}
                  description={description}
                  price={price}
                  author={author}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="w-dvw h-full flex justify-center items-center">
            <p className="text-center text-lg">{title}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-1 text-base text-gray-600">
        <p>{author}</p>
        <div className="flex items-center space-x-2">
          <StarRating rating={rating} readOnly />
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
}
