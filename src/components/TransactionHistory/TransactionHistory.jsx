import React from "react";
import styles from "./TransactionHistory.module.css";
import TransactionHistoryRow from "./TransactionHistoryRow/TransactionHistoryRow.jsx";

const TransactionHistory = ({ transactionData }) => {
  
  return !!transactionData &&
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableHeadRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {transactionData.map(({ id, type, amount, currency }) => (
          <TransactionHistoryRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        )
      )}</tbody>
    </table>
};

export default TransactionHistory;
