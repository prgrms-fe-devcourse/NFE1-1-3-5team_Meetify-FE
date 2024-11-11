import styled from "styled-components";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const Label = styled.p`
  font-size: var(--font-size-body-medium);
  font-weight: var(--font-weight-semi-bold);
  color: var(--font-color-dark);
  margin-top: -30px;
`;

export const StyledDatePicker = styled(MuiDatePicker)`
  .MuiInputBase-root {
    min-height: auto;
    width: 570px;
    border-radius: 10px;
    padding: 0 3px;
    font-size: var(--font-size-body-medium);
    font-weight: var(--font-weight-semi-bold);
    align-items: center;
    display: flex;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #c4c4c4;
  }

  /* 달력 아이콘 위치 조정 */
  .MuiInputAdornment-root {
    margin-right: 14px; /* 오른쪽 여백 조정 */
  }
`;
