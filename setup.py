from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in law/__init__.py
from law import __version__ as version

setup(
	name="law",
	version=version,
	description="Law Management",
	author="aakvatech",
	author_email="none",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
