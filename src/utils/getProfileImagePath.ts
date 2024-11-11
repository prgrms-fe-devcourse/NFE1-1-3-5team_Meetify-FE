export const getProfileImagePath = (index: number): string => {
  // Ensure index is between 1 and 36
  if (index < 1 || index > 36 || !Number.isInteger(index)) {
    throw new Error("Profile image index must be an integer between 1 and 36");
  }

  return `/Dummy_Profile_Image/Dummy_Profile_Image_${index}.png`;
};
