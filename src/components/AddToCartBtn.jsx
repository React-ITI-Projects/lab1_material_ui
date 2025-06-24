import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function AddToCartBtn() {
  return (
    <>
      <Button
        color="primary"
        startIcon={<AddShoppingCartIcon />}
        onClick={() => alert("Button Clicked!")}
        size="small"
        variant="contained"
      >
        Add to cart
      </Button>
    </>
  );
}

export default AddToCartBtn;
