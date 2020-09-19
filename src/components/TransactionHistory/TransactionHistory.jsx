import React from "react";
import styles from "./TransactionHistory.module.css";
import TransactionHistoryRow from "./TransactionHistoryRow/TransactionHistoryRow.jsx";

const TransactionHistory = ({ transactionData }) => {
  const transactionDataElements = transactionData.map((el) => {
    return (
      <TransactionHistoryRow
        key={el.id}
        type={el.type}
        amount={el.amount}
        currency={el.currency}
      />
    );
  });
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableHeadRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>{transactionDataElements}</tbody>
    </table>
  );
};

export default TransactionHistory;
