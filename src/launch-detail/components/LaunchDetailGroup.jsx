import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const style = {
  label: {
    textAlign: 'right',
    paddingRight: '1rem'
  }
};

export default class dataDetailGroup extends Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <ExpansionPanel defaultExpanded square={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">{this.props.header}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <table>
              <tbody>
                {data.map(item => {
                  return (
                    <tr key={item.label}>
                      <td style={style.label}>
                        <Typography>{item.label}</Typography>
                      </td>
                      <td>
                        <Typography>{item.value}</Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
