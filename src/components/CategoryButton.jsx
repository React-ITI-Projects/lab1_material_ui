import Button from "@mui/material/Button";

function CategoryButton({ name }) {
  return (
    <>
      <Button
        color="primary"
        onClick={() => alert("Button Clicked!")}
        size="medium"
        variant="outlined"
      >
        {name}
      </Button>
    </>
  );
}

export default CategoryButton;
