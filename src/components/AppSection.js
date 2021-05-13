
import PropTypes from 'prop-types';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import { paperStyle } from '../utils/styles';

const useStyles = makeStyles((theme) => ({
  paper: paperStyle(theme),
}));

/**
 * Renders Application styled "Section" using Material UI Paper and Title components
 * @param {string} title - text of heading title
 */
const AppSection = ({ title = 'Missing title...', variant = 'subtitle2', children, ...props }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} {...props}>
      <Typography variant={variant}>{title}</Typography>
      {children || 'Under constriction...'}
    </Paper>
  );
};

AppSection.propTypes = {
  title: PropTypes.node.isRequired,
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default AppSection;
