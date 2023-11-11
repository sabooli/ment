import { Container, Grid, Link, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import CallIcon from "@mui/icons-material/Call";

const Adress = () => {
  const items = [
    {
      icon: <RoomIcon color="warning" />,
      name: "نسیم آباد-خیابان اصلی-جنب شیرینی پزی سلیمی",
    },
    { icon: <CallIcon color="warning" />, name: "031-4276-4555" },
  ];

  return (
    <Grid container id="Address">
      <Container maxWidth="lg" className="container-1300">
        <Grid item xs={12} my={7}>
          <Typography
            marginBottom={0.3}
            variant="h5"
            component="h5"
            className="font-bold"
            color="light.main"
          >
            آدرس ما کجاست<span className="span-top">؟</span>
          </Typography>
          {items.map((item, index) => (
            <Link
              pt={1.7}
              key={index}
              href="#"
              className="d-flex align-center text-decoration"
            >
              {item.icon}
              <Typography
                pr={1}
                variant="body1"
                component="p"
                className="font-light text-decoration"
                color="light.contrastText"
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default Adress;
