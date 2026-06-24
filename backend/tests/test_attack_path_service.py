import os
import sys
import unittest

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app.services.attack_path_service import export_attack_graph, get_attack_graph, get_shortest_attack_path


class AttackPathServiceTests(unittest.TestCase):
    def test_get_attack_graph_returns_summary(self):
        result = get_attack_graph()
        self.assertIn("summary", result)
        self.assertGreaterEqual(len(result["nodes"]), 3)
        self.assertGreaterEqual(len(result["edges"]), 3)

    def test_export_attack_graph_returns_serializable_payload(self):
        result = export_attack_graph("json")
        self.assertIn("nodes", result)
        self.assertIn("edges", result)
        self.assertIn("summary", result)

    def test_shortest_attack_path_is_found(self):
        path = get_shortest_attack_path("APT28", "DC-01")
        self.assertIn("DC-01", path)
        self.assertTrue(len(path) >= 2)


if __name__ == "__main__":
    unittest.main()
