import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaUsers,
  FaCodeBranch,
  FaStar,
} from "react-icons/fa";
import "../css/GitHubStats.css";

const GitHubStats = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = "bhoga08";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
          ),
        ]);

        if (!profileResponse.ok || !reposResponse.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();

        setProfile(profileData);
        setRepos(reposData);
      } catch (error) {
        console.error("GitHub API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const totalStars = repos.reduce(
    (total, repo) => total + repo.stargazers_count,
    0
  );

  if (loading) {
    return (
      <section className="github-stats">
        <div className="github-container">
          <p className="github-loading">Loading GitHub activity...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="github-stats">
      <div className="github-container">

        {/* Heading */}
        <motion.div
          className="github-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">GITHUB</span>

          <h2>
            Coding <span>Activity</span>
          </h2>

          <p>
            A glimpse into my open-source work, projects and
            development activity.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="github-cards">

          <motion.div
            className="github-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <FaCodeBranch />

            <div>
              <h3>{profile?.public_repos || 0}</h3>
              <p>Repositories</p>
            </div>
          </motion.div>

          <motion.div
            className="github-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FaUsers />

            <div>
              <h3>{profile?.followers || 0}</h3>
              <p>Followers</p>
            </div>
          </motion.div>

          <motion.div
            className="github-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <FaStar />

            <div>
              <h3>{totalStars}</h3>
              <p>Total Stars</p>
            </div>
          </motion.div>

        </div>

        {/* Contribution Graph */}
        <motion.div
          className="github-activity"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="activity-header">
            <div>
              <h3>Contribution Activity</h3>
              <p>My GitHub development activity</p>
            </div>

            <FaGithub className="github-icon" />
          </div>

          <div className="contribution-wrapper">
            <img
              src={`https://ghchart.rshah.org/40916c/${username}`}
              alt="GitHub contribution graph"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* GitHub Button */}
        <motion.a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="github-profile-btn"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaGithub />
          View GitHub Profile
        </motion.a>

      </div>
    </section>
  );
};

export default GitHubStats;