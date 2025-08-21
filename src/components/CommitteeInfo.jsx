
const committeeMembers = [
  { name: 'Yap Boon Phye', role: 'President' },
  { name: 'Tan Ngian Kwang', role: 'Honorary Secretary' },
  { name: 'Kenny Tan Choon Keong', role: 'Honorary Treasurer' },
  { name: 'Boon Wendy', role: 'Committee Member' },
  { name: 'Quek Cheng Lock Ramon', role: 'Committee Member' },
  { name: 'R Munggam s/o Apasamy', role: 'Committee Member' },
  { name: 'K. Ravintheran', role: 'Committee Member' },
  { name: 'Bong Gee Choi', role: 'Committee Member' },
  { name: 'Vijay Das', role: 'Committee Member' },
  { name: 'Aurobind Yap Jin', role: 'Committee Member' },
  { name: 'Govind Yap Jinhui', role: 'Committee Member' },
];

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]/g, '-');

const CommitteeCards = () => {
  const president = committeeMembers.filter(m => m.role === 'President');
  const honorary = committeeMembers.filter(m => m.role.includes('Honorary'));
  const members = committeeMembers.filter(m => m.role === 'Committee Member');

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
    </div>
  );
};

export default CommitteeCards;
