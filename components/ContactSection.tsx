import React from 'react';
import styles from '../styles/ContactSection.module.css';
import { motion } from 'framer-motion';

interface ContactLink {
  port: string;
  name: string;
  url: string;
  protocol: string;
}

const contacts: ContactLink[] = [
  { port: '9418', name: 'GitHub', url: 'https://github.com/Komalkasat09', protocol: 'git://' },
  { port: '443', name: 'LinkedIn', url: 'https://linkedin.com/in/komal-kasat', protocol: 'https://' },
  { port: '587', name: 'Email', url: 'mailto:komalkasat74653@gmail.com', protocol: 'smtp://' },
  { port: '3000', name: 'Location', url: 'https://maps.google.com/?q=Mumbai,Maharashtra,India', protocol: 'https://' },
];

export default function ContactSection() {
  return (
    <div className={styles.contactContainer}>
      <h3 className={styles.sectionTitle}>$ netstat -an | grep ESTABLISHED</h3>
      <div className={styles.statusLine}>
        <span className={styles.statusIndicator}>●</span>
        <span className={styles.statusText}>komal.kasat is [ONLINE]</span>
      </div>
      <table className={styles.networkTable}>
        <thead>
          <tr>
            <th>PORT</th>
            <th>PROTOCOL</th>
            <th>NAME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, idx) => (
            <motion.tr
              key={contact.port}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={styles.contactRow}
            >
              <td className={styles.port}>{contact.port}</td>
              <td className={styles.protocol}>{contact.protocol}</td>
              <td className={styles.name}>{contact.name}</td>
              <td>
                <a href={contact.url} target="_blank" rel="noopener noreferrer" className={styles.connectButton}>
                  Connect
                </a>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <div className={styles.encryptedMessage}>
        <div className={styles.messageHeader}>📧 Encrypted Message</div>
        <div className={styles.messageBody}>
          Click &quot;Decrypt&quot; to reveal contact details
          <button className={styles.decryptButton}>Decrypt to Contact</button>
        </div>
      </div>
    </div>
  );
}
