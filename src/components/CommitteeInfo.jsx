const committeeMembers = [
  { name: 'Yap Boon Phye', role: 'President' },
  { name: 'Tan Ngian Kwang', role: 'Honorary Secretary' },
  { name: 'Kenny Tan', role: 'Honorary Treasurer' },
  { name: 'Wendy Boon', role: 'Committee Member' },
  { name: 'Ramon Quek', role: 'Committee Member' },
  { name: 'R Munggam', role: 'Committee Member' },
  { name: 'K. Ravintheran', role: 'Committee Member' },
  { name: 'Anthony Bong', role: 'Committee Member' },
  { name: 'Vijay Das', role: 'Committee Member' },
  { name: 'Aurobind Yap', role: 'Committee Member' },
  { name: 'Govind Yap', role: 'Committee Member' },
];

const staffAttendance = [
  { name: 'Hans Goh', role: 'Executive Director' },
  { name: 'Lucas Seah', role: 'Assistant Executive Director' },
  { name: 'Chen Zhen Zhen', role: 'Assistant Executive Director/Finance' },
];

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, '-');

const CommitteeCards = () => {
  const president = committeeMembers.filter((m) => m.role === 'President');
  const honorary = committeeMembers.filter((m) => m.role.includes('Honorary'));
  const members = committeeMembers.filter((m) => m.role === 'Committee Member');

  const renderCards = (group) =>
    group.map((member, index) => {
      const uniqueClass = `card-${slugify(member.name)}`;
      return (
        <div key={index} className={`card-com ${uniqueClass}`}>
          <p><b>{member.name}</b></p>
          <p>{member.role}</p>
        </div>
      );
    });

  return (
    <div className="card-container-com">
      <div className="card-row-com">{renderCards(president)}</div>
      <div className="card-row-com">{renderCards(honorary)}</div>
      <div className="card-row-com">{renderCards(members)}</div>

      <div className="staff-attendance-section">
        <h3 className="staff-attendance-title">Staff In Attendance</h3>
        <div className="card-row-com">{renderCards(staffAttendance)}</div>
      </div>
    </div>
  );
};

export default CommitteeCards;