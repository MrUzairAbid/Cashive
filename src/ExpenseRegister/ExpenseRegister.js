import { Component } from 'react';
import ExpenseDetails from '../ExpenseDetails/ExpenseDetails';
import CashListing from '../CashListing/CashListing';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class ExpenseRegister extends Component {

  state = {
    cashEntries: []
  }

  addCashEntryToState = (cashEntry) => {
    const cashEntries = [...this.state.cashEntries, cashEntry];
    this.setState({ cashEntries: cashEntries });
  }

  removeCashEntryFromState = (index) => {
    const cashEntries = this.state.cashEntries;
    cashEntries.splice(index, 1);
    this.setState({ cashEntries: cashEntries });
  }

  render() {

    return (
      <Container maxWidth="lg">
        <div>
          <div>
            <Card variant="outlined" style={{backgroundColor: '#d3c1d4'}}>
              <CardContent>
                <ExpenseDetails add={this.addCashEntryToState.bind(this)} />
              </CardContent>
            </Card>
          </div>
          <div style={{ paddingTop: '4%' }}>
            <CashListing entries={this.state.cashEntries} remove={this.removeCashEntryFromState.bind(this)} />
          </div>
        </div>
      </Container>
    );
  }

}

export default ExpenseRegister;
