export function generateCourseMaterial(featureName, courseId) {
  const name = typeof featureName === 'string' ? featureName.toLowerCase() : featureName.title.toLowerCase();
  
  let coreDetails = `<strong>Theoretical Foundation:</strong> This section breaks down the core concepts of <strong>${featureName}</strong>. It covers the necessary architectural design, dependencies, and operational mandates that govern its implementation within a modern law enforcement framework.`;
  
  let practicalDetails = `<strong>Practical Execution:</strong> Officers utilize specialized software environments to execute the tasks outlined in <strong>${featureName}</strong>. This involves setting up secure sandboxes, integrating with internal databases (like CCTNS), and executing commands while maintaining strict digital audit logs.`;
  
  let advancedDetails = `<strong>Case Study & Pro-Tips:</strong> In recent multi-state operations, mastery of <strong>${featureName}</strong> proved pivotal in overcoming traditional roadblocks. <br/><br/><em>Pro-Tip:</em> Always ensure you maintain an uninterrupted chain of custody and document all digital footprints when applying these techniques in the field.`;

  // === OSINT MASTERY DETAILED STEPS ===
  if (courseId === 'osint-mastery') {
    if (name.includes('step 1')) {
      coreDetails = `<strong>Step 1: Operational Security (OPSEC)</strong> is the absolute foundation of intelligence gathering. If the target knows they are being watched, they will destroy evidence. This step covers the creation of 'Sockpuppets' (fake undercover identities) that look authentic and cannot be traced back to the police network.`;
      practicalDetails = `<strong>Practical Setup:</strong><br/>1. Boot into a secure VM (Virtual Machine).<br/>2. Connect to a premium No-Log VPN (e.g., ProtonVPN, Mullvad).<br/>3. Generate fake personas using <em>ThisPersonDoesNotExist.com</em> and <em>FakeNameGenerator</em>.<br/>4. Use clean, prepaid mobile numbers (burner phones) for SMS verification on platforms like Telegram and Facebook.`;
      advancedDetails = `<strong>Pro-Tip:</strong> Never mix your personal browsing with your Sockpuppet browsing. Browser fingerprinting (canvas, WebGL, user-agent) can link your real identity to your fake one. Use isolated browsers like <em>Brave</em> or <em>Tor</em>.`;
    } else if (name.includes('step 2')) {
      coreDetails = `<strong>Step 2: Google Dorking</strong> (Advanced Search Operators) allows investigators to bypass Google's standard algorithms to find hidden, indexed files, passwords, or exposed server directories that administrators forgot to secure.`;
      practicalDetails = `<strong>Common Dorks:</strong><br/>- <code>site:example.com ext:pdf "confidential"</code> (Finds confidential PDFs).<br/>- <code>inurl:admin login</code> (Finds admin portals).<br/>- <code>intitle:"index of" "passwords.txt"</code> (Finds exposed password files on servers).<br/><br/>Officers use these to find leaked data of suspects.`;
      advancedDetails = `<strong>Case Study:</strong> During a fraud investigation, cyber cell used the dork <code>site:pastebin.com "suspect@email.com"</code> and found the suspect's dumped database containing their secondary backup emails, leading directly to their physical location.`;
    } else if (name.includes('step 3')) {
      coreDetails = `<strong>Step 3: Social Media Intelligence (SOCMINT)</strong> is the art of extracting actionable intelligence from public platforms. It involves mapping social graphs (who is friends with whom) to identify criminal hierarchies.`;
      practicalDetails = `<strong>Tools & Techniques:</strong><br/>- <strong>Facebook Graph Search:</strong> Finding all check-ins or photos liked by a suspect.<br/>- <strong>Instagram OSINT:</strong> Using tools like <em>Instaloader</em> to download public stories before they expire.<br/>- <strong>Username Enumeration:</strong> Using tools like <em>Sherlock</em> to see if the suspect uses the same username across 300+ different websites.`;
      advancedDetails = `<strong>Real-World Application:</strong> A suspect deleted their main Facebook account, but investigators used <em>Sherlock</em> to find a forgotten Pinterest account under the same username, which had a geotagged photo of their native village.`;
    } else if (name.includes('step 4')) {
      coreDetails = `<strong>Step 4: Image Forensics</strong> involves extracting metadata that is embedded into photos by smartphones and digital cameras. This data (EXIF) contains the exact GPS coordinates, camera model, and timestamp of when the photo was taken.`;
      practicalDetails = `<strong>Analysis:</strong><br/>1. Download the raw image from the source (avoiding platforms like WhatsApp that strip EXIF).<br/>2. Use tools like <em>Jeffrey's Image Metadata Viewer</em> or <em>ExifTool</em>.<br/>3. Map the GPS coordinates on Google Earth.<br/>4. Use Reverse Image Search (Yandex, Google Lens) to find where else the image has been posted.`;
      advancedDetails = `<strong>Case Study:</strong> A kidnapper sent a "proof of life" photo via a hidden forum. Investigators extracted the EXIF data, found the latitude/longitude, and raided the exact farmhouse within 3 hours, rescuing the victim.`;
    } else if (name.includes('step 5')) {
      coreDetails = `<strong>Step 5: Corporate Reconnaissance</strong> is used to track white-collar criminals, shell companies, and fraudulent websites. It relies on open business registries and domain ownership histories.`;
      practicalDetails = `<strong>Techniques:</strong><br/>- <strong>WHOIS Lookups:</strong> Finding who registered a scam website.<br/>- <strong>Historical WHOIS:</strong> Even if they use "Privacy Protection" now, tools like <em>DomainTools</em> can reveal their real name from 5 years ago when they first registered it.<br/>- <strong>MCA Portal:</strong> Checking Director Identification Numbers (DIN) of shell companies.`;
      advancedDetails = `<strong>Case Study:</strong> A fake loan app was scamming thousands. By checking the historical WHOIS of the domain, police found the original registrant's email. That email was linked to a registered company in Delhi, leading to the arrest of the CEO.`;
    } else if (name.includes('step 6')) {
      coreDetails = `<strong>Step 6: Dark Web Reconnaissance</strong> involves monitoring illicit marketplaces (drugs, weapons, CP, leaked data) on the Tor network (.onion sites). Standard browsers cannot access these sites.`;
      practicalDetails = `<strong>Safe Access:</strong><br/>- Use the <em>Tor Browser</em> routed through a VPN.<br/>- Monitor markets using directories like <em>Dark.fail</em> or <em>Torch</em>.<br/>- Identify vendors selling stolen Indian credit card data.<br/>- Never download files directly to the host machine to avoid malware traps.`;
      advancedDetails = `<strong>Pro-Tip:</strong> Vendors on the dark web often use the same PGP (Pretty Good Privacy) key across multiple forums. Correlating these keys can link a vendor's dark web alias to a clear-web identity.`;
    } else if (name.includes('step 7')) {
      coreDetails = `<strong>Step 7: Crypto-Wallet Tracing</strong> is essential for tracking ransom payments or drug money. Bitcoin and Ethereum ledgers are 100% public, meaning every transaction can be traced from genesis to cash-out.`;
      practicalDetails = `<strong>Tracing Methodology:</strong><br/>- Input the suspect's Bitcoin address into a <em>Blockchain Explorer</em>.<br/>- Follow the UTXOs (Unspent Transaction Outputs) as they jump from wallet to wallet.<br/>- Look for 'Clustering' (when multiple wallets combine funds into one).<br/>- Trace until the funds hit a KYC-compliant exchange (like Binance).`;
      advancedDetails = `<strong>Case Study:</strong> A 50-Lakh crypto extortion was traced through 15 different wallets. The final wallet deposited funds into WazirX. Police subpoenaed WazirX, got the suspect's Aadhaar card and bank details, and made the arrest.`;
    } else if (name.includes('step 8')) {
      coreDetails = `<strong>Step 8: Automated Link Analysis</strong> is the final step. When you have hundreds of data points (phone numbers, IPs, emails, crypto wallets), it becomes impossible to track them in an Excel sheet. You need visual graphing.`;
      practicalDetails = `<strong>Using Maltego:</strong><br/>- Import all known data points (Entities) onto a canvas.<br/>- Run 'Transforms' (automated scripts) that instantly query databases to find connections.<br/>- The software draws visual lines connecting the suspect to their associates, properties, and digital assets.`;
      advancedDetails = `<strong>Outcome:</strong> By visually graphing a syndicate, the investigating officer can instantly identify the 'Central Node' (the mastermind) connecting all the different shell companies and bank accounts, presenting a compelling visual case to the judge.`;
    }
    return { coreDetails, practicalDetails, advancedDetails };
  }

  // === ADVANCED FORENSICS DETAILED STEPS ===
  if (courseId === 'advanced-forensics') {
    if (name.includes('step 1')) {
      coreDetails = `<strong>Step 1: IT Act & Digital Custody</strong> establishes the legal foundation. Under the Bharatiya Nyaya Sanhita (BNS) and Section 65B of the IT Act, digital evidence must be handled with a flawless Chain of Custody to be admissible in court.`;
      practicalDetails = `<strong>Protocols:</strong><br/>- Never turn on a seized device.<br/>- Document the exact state of the screen with a physical camera.<br/>- Note the date, time, and location of the seizure.<br/>- Place devices in anti-static bags to prevent data corruption.`;
      advancedDetails = `<strong>Legal Pitfall:</strong> Countless high-profile cases collapse because a constable turned on a seized phone to "check" the messages, altering the file timestamps and violating the chain of custody.`;
    } else if (name.includes('step 2')) {
      coreDetails = `<strong>Step 2: Securing the Digital Scene</strong> focuses on preventing remote tampering. Criminals often set up remote-wipe commands (like "Find My iPhone" erase) to trigger the moment the device connects to the internet.`;
      practicalDetails = `<strong>Action Plan:</strong><br/>- Immediately isolate all mobile devices inside a <em>Faraday Bag</em>, which blocks all cellular, Wi-Fi, and Bluetooth signals.<br/>- Alternatively, put the device in Airplane mode if it is unlocked.<br/>- Disconnect routers from the WAN port but leave the LAN connected to preserve volatile data.`;
      advancedDetails = `<strong>Case Study:</strong> An arrested drug dealer triggered a dead-man's switch. Because the arresting officer failed to use a Faraday bag, a remote wipe command was received, erasing 2 years of encrypted WhatsApp logs before they reached the lab.`;
    } else if (name.includes('step 3')) {
      coreDetails = `<strong>Step 3: Storage Imaging & Hashing</strong> is the process of creating an exact, bit-by-bit clone of a hard drive. We never investigate the original evidence; we only investigate the clone.`;
      practicalDetails = `<strong>The Process:</strong><br/>1. Remove the HDD/SSD from the suspect's computer.<br/>2. Connect it to a hardware <em>Write-Blocker</em> (e.g., Tableau).<br/>3. Connect the Write-Blocker to the forensic workstation.<br/>4. Use software (like FTK Imager or EnCase) to create a <code>.E01</code> or <code>.DD</code> image.<br/>5. Generate an MD5/SHA-256 hash of both the original drive and the clone.`;
      advancedDetails = `<strong>The Rule of Thumb:</strong> If the hash of the original drive and the clone do not match exactly, the evidence has been altered and is legally compromised.`;
    } else if (name.includes('step 4')) {
      coreDetails = `<strong>Step 4: Mobile Device Forensics</strong> deals with bypassing screen locks and extracting data from the heavily encrypted flash memory of Android and iOS devices.`;
      practicalDetails = `<strong>Tools Used:</strong> <em>Cellebrite UFED</em> (Universal Forensic Extraction Device).<br/><br/><strong>Extraction Types:</strong><br/>- <em>Logical:</em> Extracts what the user sees (Contacts, SMS, Photos).<br/>- <em>Physical:</em> Bypasses the OS to dump the raw memory, allowing recovery of permanently deleted WhatsApp SQLite databases.`;
      advancedDetails = `<strong>Case Study:</strong> A murder suspect deleted a WhatsApp conversation. Through physical extraction and SQLite database parsing, the cyber cell recovered the deleted "Write Ahead Log" (WAL) file, restoring the conversation.`;
    } else if (name.includes('step 5')) {
      coreDetails = `<strong>Step 5: Volatile Memory Capture</strong> is critical for live systems. RAM contains passwords in plain text, active network connections, and unencrypted malware. All this data vanishes the second the computer is turned off.`;
      practicalDetails = `<strong>Live Response:</strong><br/>- Do NOT pull the plug on a running server.<br/>- Insert a forensic USB containing <em>DumpIt</em> or <em>FTK Imager Lite</em>.<br/>- Capture the entire RAM into a <code>.raw</code> or <code>.mem</code> file.<br/>- Analyze the dump later using the <em>Volatility Framework</em>.`;
      advancedDetails = `<strong>Real-World Use:</strong> During a raid on an illegal call center, officers captured the RAM of the admin PC. Using Volatility, they found the master password to their encrypted cloud database stored in plain text in memory.`;
    } else if (name.includes('step 6')) {
      coreDetails = `<strong>Step 6: Malware Reverse Engineering</strong> involves tearing apart a malicious program (like a virus or ransomware) to understand how it communicates with its creator.`;
      practicalDetails = `<strong>Reverse Engineering:</strong><br/>- Run the malware inside an isolated Sandbox (like <em>Cuckoo Sandbox</em>).<br/>- Use disassemblers like <em>Ghidra</em> or <em>IDA Pro</em> to convert the compiled `.exe` file back into readable Assembly code.<br/>- Identify hardcoded IP addresses (Command & Control servers) to block at the state firewall.`;
      advancedDetails = `<strong>Case Study:</strong> A ransomware hit a government hospital. By reverse-engineering the payload in Ghidra, the tech cell found a flaw in the attacker's encryption algorithm, allowing them to decrypt the files without paying the ransom.`;
    } else if (name.includes('step 7')) {
      coreDetails = `<strong>Step 7: Network Packet Forensics</strong> is the analysis of network traffic. By intercepting data packets, investigators can reconstruct entire emails, downloaded files, and passwords sent over insecure connections.`;
      practicalDetails = `<strong>Analysis:</strong><br/>- Load a captured <code>.pcap</code> file into <em>Wireshark</em>.<br/>- Filter for HTTP, FTP, or SMTP protocols.<br/>- Use the 'Follow TCP Stream' feature to read the exact conversation between the suspect's computer and the remote server.`;
      advancedDetails = `<strong>Pro-Tip:</strong> Most modern traffic is encrypted (HTTPS/TLS). However, DNS requests are often unencrypted, revealing exactly which websites the suspect visited, even if you can't see the specific pages.`;
    } else if (name.includes('step 8')) {
      coreDetails = `<strong>Step 8: Court Presentation (Section 65B)</strong> is the final test. If the investigator cannot explain their highly technical process to a non-technical judge, the case is lost.`;
      practicalDetails = `<strong>Drafting the Report:</strong><br/>- Clearly state the timeline of custody.<br/>- Present the original MD5/SHA-256 hashes.<br/>- Translate technical jargon (e.g., "SQL Injection") into simple analogies (e.g., "Picking the lock on a database door").<br/>- Attach the mandatory Section 65B certificate signed by the officer who performed the extraction.`;
      advancedDetails = `<strong>Outcome:</strong> A perfectly documented forensic report leaves the defense lawyer with no room to argue technicalities, resulting in swift convictions.`;
    }
    return { coreDetails, practicalDetails, advancedDetails };
  }

  if (name.includes('dark web') || name.includes('tor')) {
    coreDetails = `
      <strong>The Dark Web</strong> operates on <em>Onion Routing (Tor)</em>, encrypting traffic through multiple volunteer nodes globally. 
      <br/><br/>
      <strong>Key Concepts:</strong>
      <ul>
        <li><strong>.onion Domains:</strong> Hidden services not indexed by Google.</li>
        <li><strong>PGP Encryption:</strong> Pretty Good Privacy used for secure communication between vendors.</li>
        <li><strong>Cryptocurrency:</strong> The primary medium of exchange (Bitcoin, Monero).</li>
      </ul>
      Understanding the Tor network's architecture is essential for tracking anonymous illicit marketplaces.
    `;
    practicalDetails = `
      <strong>Field Operations:</strong> Officers use specialized OSINT tools and virtual machines (like Tails OS or Whonix) to safely access dark web marketplaces without exposing the police network (IP) to malware.
      <br/><br/>
      <strong>Steps for Investigation:</strong>
      <ol>
        <li>Establish a secure, isolated sandbox environment.</li>
        <li>Create undercover burner identities (Sockpuppets).</li>
        <li>Monitor forums for illicit trade (drugs, weapons, CP).</li>
        <li>Correlate PGP public keys with clear-web aliases.</li>
      </ol>
    `;
    advancedDetails = `
      <strong>Case Study: Operation 'Silk Route'</strong><br/>
      UP STF was tracking a major drug syndicate operating purely on the Dark Web. By analyzing a vendor's PGP key, analysts found a match on a 5-year-old clear-web gaming forum. 
      <br/><br/>
      <strong>Outcome:</strong> This single OPSEC failure allowed the cyber cell to issue a Section 91 CrPC notice to the gaming forum, extracting the suspect's real IP address and leading to a massive server takedown and arrest.
    `;
  } else if (name.includes('crypto') || name.includes('bitcoin')) {
    coreDetails = `
      <strong>Cryptocurrency</strong> operates on a decentralized Blockchain utilizing SHA-256 cryptography. Transactions are publicly visible on the ledger, but wallets remain pseudo-anonymous.
      <br/><br/>
      <strong>Critical Mechanisms:</strong>
      <ul>
        <li><strong>UTXO (Unspent Transaction Output):</strong> How balances are calculated.</li>
        <li><strong>Mempools:</strong> Where unconfirmed transactions wait before mining.</li>
        <li><strong>Smart Contracts:</strong> Automated execution on Ethereum-like chains.</li>
      </ul>
    `;
    practicalDetails = `
      <strong>Investigation Workflow:</strong> Investigators use Blockchain Explorers (like Etherscan) and clustering heuristics to trace the flow of stolen funds across multiple hops.
      <br/><br/>
      <strong>Tools Used:</strong> Chainalysis, TRM Labs, and open-source tracing tools. The primary goal is to follow the money until it hits a Centralized Exchange (CEX) like Binance or WazirX, which complies with KYC (Know Your Customer) regulations.
    `;
    advancedDetails = `
      <strong>Case Study: Ransomware Syndicate</strong><br/>
      A local hospital was hit by ransomware demanding 50 Lakhs in USDT. The cyber cell traced the transaction graph through multiple wallets.
      <br/><br/>
      <strong>The Break:</strong> The suspects attempted to cash out through a peer-to-peer (P2P) exchange. By identifying the KYC-linked bank account on the exchange, the police successfully froze the funds and worked with Interpol to seize the offshore assets.
    `;
  } else if (name.includes('ip address') || name.includes('network') || name.includes('sniffing')) {
    coreDetails = `
      An <strong>IP Address (IPv4/IPv6)</strong> uniquely identifies a device on a network. 
      <br/><br/>
      <strong>Core Concepts:</strong>
      <ul>
        <li><strong>Subnetting & CIDR:</strong> Dividing networks logically.</li>
        <li><strong>MAC Addresses:</strong> Hardware-level identifiers (OUI).</li>
        <li><strong>NAT (Network Address Translation):</strong> How multiple devices share one public IP.</li>
        <li><strong>Packet Sniffing:</strong> Intercepting data packets traversing the network.</li>
      </ul>
    `;
    practicalDetails = `
      <strong>Tools & Procedures:</strong> Officers use network analysis tools like <em>Wireshark</em> and IP Loggers. 
      <br/><br/>
      By obtaining a suspect's IP address through a phishing link or server log, police can issue a <strong>Section 91 CrPC notice</strong> to ISPs (Jio, Airtel, BSNL) to get the exact physical address (CAF details) and subscriber information at that exact timestamp.
    `;
    advancedDetails = `
      <strong>Case Study: Phishing Ring Bust</strong><br/>
      Hackers in Jamtara were using heavy proxies to mask their location. However, a brief VPN disconnection exposed their true IPv4 address for merely 3 seconds in the server logs.
      <br/><br/>
      <strong>Action Taken:</strong> UP Cyber Cell instantly mapped this IP to a local ISP tower. Combining this with CDR (Call Detail Record) analysis of that tower, they pinpointed the exact house, leading to a midnight raid.
    `;
  } else if (name.includes('forensic') || name.includes('device') || name.includes('scene') || name.includes('custody')) {
    coreDetails = `
      <strong>Digital Forensics</strong> relies on the exact bit-by-bit cloning of physical storage to ensure absolute data integrity. 
      <br/><br/>
      <strong>Key Pillars:</strong>
      <ul>
        <li><strong>Hashing (MD5, SHA-256):</strong> Generating a digital fingerprint to prove evidence hasn't been tampered with.</li>
        <li><strong>Chain of Custody:</strong> A strict chronological documentation of evidence handling.</li>
        <li><strong>File Carving:</strong> Recovering fragments of deleted files from unallocated disk space.</li>
      </ul>
    `;
    practicalDetails = `
      <strong>Field Execution:</strong> Officers must use <em>Write-Blockers</em> when connecting suspect hard drives to prevent accidental OS data modification.
      <br/><br/>
      <strong>Tools:</strong> High-end extraction tools like <em>Cellebrite UFED</em> and <em>Magnet AXIOM</em> are used to bypass Android/iOS locks and extract deleted WhatsApp chats, hidden partitions, and call logs directly from the flash memory.
    `;
    advancedDetails = `
      <strong>Case Study: Murder Investigation</strong><br/>
      The primary suspect deleted all phone records, uninstalled WhatsApp, and cleared GPS history. 
      <br/><br/>
      <strong>The Breakthrough:</strong> A physical forensic extraction recovered a deleted Google Maps cache file (SQLite database) showing their exact presence at the crime scene at the time of death. This digital evidence secured the conviction in court.
    `;
  } else if (name.includes('legal') || name.includes('65b') || name.includes('section') || name.includes('bns') || name.includes('court') || name.includes('warrant')) {
    coreDetails = `
      <strong>Legal compliance</strong> is the backbone of any cyber investigation. Without proper legal backing, the most brilliant technical investigation will be thrown out by a judge.
      <br/><br/>
      <strong>Critical Frameworks:</strong>
      <ul>
        <li><strong>Section 65B (Evidence Act) / BNS Equivalent:</strong> Mandates strict certification for the admissibility of electronic records.</li>
        <li><strong>IT Act 2000:</strong> Sections covering hacking, data theft, and obscenity.</li>
        <li><strong>Data Privacy Laws:</strong> Guidelines on how long ISPs must retain logs.</li>
      </ul>
    `;
    practicalDetails = `
      <strong>Drafting Warrants:</strong> Investigating Officers (IOs) must draft highly technical Search and Seizure Warrants for digital domains (e.g., seizing a cloud server or an email account).
      <br/><br/>
      <strong>Compliance:</strong> Ensuring hashing (SHA-256) is documented on-site during seizure, signing hashing logs, and generating flawless 65B certificates for court submission.
    `;
    advancedDetails = `
      <strong>Case Study: High Court Precedent</strong><br/>
      A major cyber fraud case involving 100+ Crores was weakening because the defense argued the hard drives could have been tampered with by the police.
      <br/><br/>
      <strong>The Save:</strong> The tech cell stepped in, produced the original seizure memo containing the pre-transit MD5 hashes, and retroactively verified them in court live. The judge accepted the evidence, resulting in life sentences.
    `;
  } else if (name.includes('osint') || name.includes('google') || name.includes('intelligence')) {
    coreDetails = `
      <strong>Open Source Intelligence (OSINT)</strong> involves legally gathering publicly available data from the internet. 
      <br/><br/>
      <strong>Core Methodology:</strong>
      <ul>
        <li><strong>Advanced Google Dorking:</strong> Using operators like <code>site:</code>, <code>filetype:</code>, and <code>inurl:</code> to find exposed databases.</li>
        <li><strong>WHOIS & DNS Lookups:</strong> Tracing domain ownership and server IP histories.</li>
        <li><strong>Social Media Scraping:</strong> Analyzing friends lists, check-ins, and public groups.</li>
      </ul>
    `;
    practicalDetails = `
      <strong>Tool Arsenal:</strong> Officers use platforms like <em>Maltego</em> for visual link analysis, <em>Shodan</em> to find vulnerable IoT devices, and custom Python scrapers to map a suspect's digital footprint across 100+ platforms simultaneously.
      <br/><br/>
      The goal is to link aliases to real identities without requiring a formal warrant.
    `;
    advancedDetails = `
      <strong>Case Study: Missing Person Found</strong><br/>
      A kidnapper used a fake, anonymous social media profile to communicate. 
      <br/><br/>
      <strong>The Break:</strong> Using reverse image searching and EXIF data analysis from an uploaded photo of a "random street", OSINT specialists pinpointed the exact GPS coordinates and camera model, leading the SWAT team directly to their hideout.
    `;
  } else if (name.includes('memory') || name.includes('volatile') || name.includes('malware') || name.includes('packet')) {
    coreDetails = `
      <strong>Deep Forensics</strong> involves analyzing Volatile Memory (RAM) and reverse engineering malicious payloads. 
      <br/><br/>
      RAM is a goldmine because it contains unencrypted passwords, active network connections, and hidden rootkit processes that permanently disappear the moment a computer is shut down or unplugged.
    `;
    practicalDetails = `
      <strong>Live Response:</strong> Investigators must NOT turn off a suspect's computer. They isolate the device from the internet, plug in a specialized USB (containing FTK Imager or DumpIt), and capture the live RAM to a `.raw` file.
      <br/><br/>
      They then use the <em>Volatility Framework</em> to analyze the memory dump, extracting encryption keys and malware signatures.
    `;
    advancedDetails = `
      <strong>Case Study: Ransomware Decryption</strong><br/>
      In a targeted attack on a municipal server, the entire database was encrypted. The tech cell arrived while the server was still running the ransomware process.
      <br/><br/>
      <strong>Outcome:</strong> By capturing the RAM, they reverse-engineered the payload using Ghidra and extracted the symmetric AES key directly from memory. They decrypted the entire database in 2 hours without paying the hackers a single rupee.
    `;
  } else if (name.includes('social engineering') || name.includes('brute force') || name.includes('password') || name.includes('phishing') || name.includes('email')) {
    coreDetails = `
      <strong>Ethical Hacking & Threat Defense</strong> focuses on understanding how attackers breach systems.
      <br/><br/>
      <strong>Attack Vectors:</strong>
      <ul>
        <li><strong>Social Engineering:</strong> Manipulating human psychology to bypass security.</li>
        <li><strong>Brute Force & Dictionary:</strong> Using massive wordlists (like RockYou.txt) to crack weak passwords.</li>
        <li><strong>Email Spoofing:</strong> Faking sender addresses by exploiting weak SPF/DKIM/DMARC records.</li>
      </ul>
    `;
    practicalDetails = `
      <strong>Defensive Posture:</strong> Cyber Cell officers analyze compromised endpoints, reverse-engineer phishing payloads (PDFs, Word Macros), and trace malicious SMTP relays. 
      <br/><br/>
      They also enforce strict internal policies like hardware 2FA (YubiKeys) and complex passphrases to harden the "Human Firewall".
    `;
    advancedDetails = `
      <strong>Case Study: Fake DGP Email</strong><br/>
      Scammers spoofed the DGP's exact email address to request emergency funds from district superintendents. 
      <br/><br/>
      <strong>Action:</strong> The tech cell analyzed the raw email headers, bypassing the fake "From" field. They traced the true originating IP to an offshore proxy server, blocked the domain at the state firewall level, and prevented a massive financial loss.
    `;
  }

  return { coreDetails, practicalDetails, advancedDetails };
}
