import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./scss/customPagination.scss";

type CustomPaginationProps = {
  totItems: number;
  setPageNumber: (value: number) => void;
};

export default function CustomPagination({
  totItems,
  setPageNumber,
}: CustomPaginationProps) {
  const postPerPage = 15;
  const nbPages: number = Math.ceil(totItems / postPerPage);

  return (
    <Stack spacing={2}>
      <Pagination
        count={nbPages}
        onChange={(_, value) => setPageNumber(value)}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
