import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Candidate from './Candidate/Candidate'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CandidateList({candidates}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
       <section className="card">
            {
                candidates.map((candidate,index)=>
                (
                    <Candidate candidate={candidate} key={index} className="card-cards"/>
                ))
            }
        </section>
    </Card>
  );
}

