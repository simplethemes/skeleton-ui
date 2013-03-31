# Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload' do
  watch(%r{.+\.(css|html)$})
end

guard 'sass',
	:input => 'sass',
	:output => 'css',
	:load_paths => Dir.glob(File.join(Gem.dir, "gems", "compass*", "frameworks/compass/*"))