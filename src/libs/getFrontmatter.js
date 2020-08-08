import moment from "moment";

const humanFormat = "DD MMM YYYY";

const getFrontmatter = (data) => {
	const { dateCreated, dateUpdated, ...rest } = data;

	const frontmatter = rest;
	if (dateCreated) frontmatter.dateCreated = dateCreated.toISOString();
	if (dateUpdated) frontmatter.dateUpdated = dateUpdated.toISOString();
	frontmatter.dateLast = dateUpdated ? frontmatter.dateUpdated : frontmatter.dateCreated;

	frontmatter.dateCreatedHuman = moment(frontmatter.dateCreated).format(humanFormat);
	frontmatter.dateUpdatedHuman = moment(frontmatter.dateUpdated).format(humanFormat);
	frontmatter.dateLastHuman = moment(frontmatter.dateLast).format(humanFormat);

	return frontmatter;
};

export default getFrontmatter;
