import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { Link } from "react-router-dom";
import AssignmentRecord from "./assignmentRecord";

const fetchAssignment = async () => {
  return await axios
    .get("http://localhost:5000/records/assignment")
    .then((res) => res.data);
};

const GetAssignment = () => {
  const [assignment, setAssignment] = useState();

  useEffect(() => {
    fetchAssignment().then((data) => setAssignment(data.assignmentRecord));
  }, []);

  return (
    <>
      <div>
        <Typography
          sx={{
            paddingTop: "20px",
            paddingLeft: "50px",
            fontSize: "40px",
            textShadow: "1px 2px grey",
          }}
        >
          Assignment
        </Typography>
        <div className="buttons">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Link
                to={"/assignment/create"}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ marginTop: "19px" }}
                  variant="contained"
                  color="secondary"
                  startIcon={<AddIcon />}
                >
                  Create
                </Button>
              </Link>
            </Grid>

            <Grid item xs={4}>
              <Button
                sx={{ marginTop: "19px" }}
                variant="contained"
                color="secondary"
              >
                Archived
              </Button>
            </Grid>

            <Grid item xs={4}>
              <Link to="/submitted" style={{ textDecoration: "none" }}>
                <Button
                  sx={{ marginTop: "19px" }}
                  variant="contained"
                  color="secondary"
                >
                  Submitted
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
        <div className="containList">
          {assignment &&
            assignment.map((assignmentrecord, i) => (
              <div key={i}>
                <AssignmentRecord assignmentrecord={assignmentrecord} />
              </div>
            ))}
        </div>
        <div>
          <Link
            to="/submission"
            style={{ textDecoration: "none", marginLeft: "600px" }}
          >
            <Button variant="contained" color="secondary">
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GetAssignment;
