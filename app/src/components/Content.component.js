import "./content.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faDollarSign,
  faInfoCircle,
  faMoneyBill,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Chart from "./Chart.component";
import InvestorsChart from "./InvestorsChart.component";
import Connect from "./Connect.component";

export default function Content() {
  return (
    <div className="container is-max-widescreen has-text-centered">
      <Connect />
      <p className="title is-size-4 has-text-left">Live Data</p>
      <div className="card">
        <Chart />
      </div>
      <br />
      <div className="columns">
        <div className="column is-one-third custom-card">
          <div>
            <div className="card-content">
              <InvestorsChart />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="columns">
            <div className="column custom-card">
              <div className="icon-container has-background-info-light">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="has-text-info"
                />
              </div>
              <div className="card-content">
                <p className="title is-size-4">$6,449,620</p>
                <p className="subtitle is-size-6">Invested in Fairmint</p>
              </div>
            </div>
            <div className="column custom-card">
              <div className="icon-container has-background-success-light">
                <FontAwesomeIcon icon={faUser} className="has-text-primary" />
              </div>
              <div className="card-content">
                <p className="title is-size-4">$34.3M</p>
                <p className="subtitle is-size-6">Company valuation</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column custom-card">
              <div className="icon-container has-background-success-light">
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  className="has-text-success"
                />
              </div>
              <div className="card-content">
                <p className="title is-size-4 has-text-dark">2,187,707 FAIR</p>
                <p className="subtitle is-size-6 has-text-dark">
                  Purchased by investors
                </p>
              </div>
            </div>
            <div className="column custom-card">
              <div className="icon-container has-background-danger-light">
                <FontAwesomeIcon
                  icon={faChartPie}
                  className="has-text-danger"
                />
              </div>
              <div className="card-content">
                <p className="title is-size-4 has-text-dark">35.36 %</p>
                <p className="subtitle is-size-6 has-text-dark">
                  Equity allocation (minimum)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p className="title is-size-4 has-text-left">
        FAIR Rolling SAFE Parameters
      </p>
      <div className="fair-params columns">
        <div className="column custom-card">
          <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
          <p className="title is-size-4 has-text-grey">35.36 %</p>
          <p className="subtitle is-size-6 has-text-dark">
            Investors Equity allocation
          </p>
        </div>
        <div className="column custom-card">
          <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
          <p className="title is-size-4 has-text-grey">3.36 %</p>
          <p className="subtitle is-size-6 has-text-dark">
            Stakeholders Equity allocation
          </p>
        </div>
        <div className="column custom-card">
          <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
          <p className="title is-size-4 has-text-warning-dark">12 months</p>
          <p className="subtitle is-size-6 has-text-dark">Lock-up period</p>
        </div>
        <div className="column custom-card">
          <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
          <p className="title is-size-4 has-text-success">USDC</p>
          <p className="subtitle is-size-6 has-text-dark">Reserve currency</p>
        </div>
        <div className="column custom-card">
          <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
          <p className="title is-size-4 has-text-success">$5000</p>
          <p className="subtitle is-size-6 has-text-dark">Minimum investment</p>
        </div>
      </div>
    </div>
  );
}
