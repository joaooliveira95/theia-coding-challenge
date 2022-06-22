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
    <div
      className="container is-max-widescreen has-text-centered"
      style={{ width: "100%" }}
    >
      {/* <Connect /> */}

      <p className="title is-size-4 has-text-left">Live Data</p>
      <div className="columns is-multiline">
        <div className="column is-full">
          <div className="card">
            <Chart />
          </div>
        </div>
      </div>
      <br />
      <div className="columns is-multiline">
        <div className="column is-one-third is-full-desktop is-one-third-widescreen">
          <div className="chart-card">
            <InvestorsChart />
          </div>
        </div>
        <div className="column">
          <div className="columns is-multiline">
            <div className="column is-full is-full-desktop is-half-widescreen">
              <div className="custom-card">
                <div className="icon-container has-background-info-dark">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className="has-text-info-light"
                  />
                </div>
                <div className="card-content">
                  <p className="title is-size-4">$6,449,620</p>
                  <p className="subtitle is-size-6">Invested in Fairmint</p>
                </div>
              </div>
            </div>
            <div className="column is-full is-full-desktop is-half-widescreen">
              <div className="custom-card">
                <div className="icon-container has-background-success-dark">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="has-text-primary-light"
                  />
                </div>
                <div className="card-content">
                  <p className="title is-size-4">$34.3M</p>
                  <p className="subtitle is-size-6">Company valuation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-full is-full-desktop is-half-widescreen">
              <div className="custom-card">
                <div className="icon-container has-background-success-dark">
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    className="has-text-success-light"
                  />
                </div>
                <div className="card-content">
                  <p className="title is-size-4 ">2,187,707 FAIR</p>
                  <p className="subtitle is-size-6 ">Purchased by investors</p>
                </div>
              </div>
            </div>
            <div className="column is-full is-full-desktop is-half-widescreen">
              <div className="custom-card">
                <div className="icon-container has-background-danger-dark">
                  <FontAwesomeIcon
                    icon={faChartPie}
                    className="has-text-danger-light"
                  />
                </div>
                <div className="card-content">
                  <p className="title is-size-4 ">35.36 %</p>
                  <p className="subtitle is-size-6 ">
                    Equity allocation (minimum)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p className="title is-size-4 has-text-left">
        FAIR Rolling SAFE Parameters
      </p>
      <div className="fair-params columns is-3 is-multiline">
        <div className="column is-full is-half-tablet is-one-quarter-desktop is-one-fifth-widescreen">
          <div className="custom-card">
            <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
            <p className="title is-size-4 has-text-grey-light">35.36 %</p>
            <p className="subtitle is-size-6 ">Investors Equity allocation</p>
          </div>
        </div>
        <div className="column is-full is-half-tablet is-one-quarter-desktop is-one-fifth-widescreen">
          <div className="custom-card">
            <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
            <p className="title is-size-4 has-text-grey-light">3.36 %</p>
            <p className="subtitle is-size-6 ">
              Stakeholders Equity allocation
            </p>
          </div>
        </div>
        <div className="column is-full is-half-tablet is-one-quarter-desktop is-one-fifth-widescreen">
          <div className="custom-card">
            <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
            <p className="title is-size-4 has-text-warning">12 months</p>
            <p className="subtitle is-size-6 ">Lock-up period</p>
          </div>
        </div>
        <div className="column is-full is-half-tablet is-one-quarter-desktop is-one-fifth-widescreen">
          <div className="custom-card">
            <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
            <p className="title is-size-4 has-text-success">USDC</p>
            <p className="subtitle is-size-6 ">Reserve currency</p>
          </div>
        </div>
        <div className="column is-full is-half-tablet is-one-quarter-desktop is-one-fifth-widescreen">
          <div className="custom-card">
            <FontAwesomeIcon icon={faInfoCircle} className="has-text-info" />
            <p className="title is-size-4 has-text-success">$5000</p>
            <p className="subtitle is-size-6 ">Minimum investment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
