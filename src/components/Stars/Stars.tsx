import { Rating } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface StarRatingProps {
  rating: number;
  readOnly?: boolean;
}

function StarRating({ rating, readOnly }: StarRatingProps) {
  const [value, setValue] = useState<number | null>(rating);

  function onChange(event: ChangeEvent<object>, newValue: number | null) {
    event.preventDefault();
    if (!readOnly) {
      setValue(newValue);
    }
  }

  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      precision={0.1}
      sx={{
        color: "yellow[800]",
        "& .MuiRating-iconEmpty": {
          color: "gray",
        },
      }}
    />
  );
}

export default StarRating;
