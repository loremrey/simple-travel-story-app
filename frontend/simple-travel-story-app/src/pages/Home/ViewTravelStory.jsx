import moment from 'moment';
import { GrMapLocation } from 'react-icons/gr';
import { MdUpdate, MdClose, MdDeleteOutline } from 'react-icons/md';

const ViewTravelStory = ({ storyInfo, onClose, onEditClick, onDeleteClick }) => {
	return (
		<div className="relative">
			<div className="flex items-center justify-end">
				<div>
					<div className="flex items-center gap-3 bg-cyan-50/50 p-2 rounded-l-lg">
						<button className="btn-small" onClick={onEditClick}>
							<MdUpdate className="text-lg" />
							UPDATE STORY
						</button>{' '}
						<button className="btn-small btn-delete" onClick={onDeleteClick}>
							<MdDeleteOutline className="text-lg" />
							Delete
						</button>
						<button className="" onClick={onClose}>
							<MdClose className="text-xl text-slate-400" />
						</button>
					</div>
				</div>
			</div>

			<div>
				<div className="flex-1 flex flex-col gap-2 py-4">
					<h1 className="text-2xl text-slate-950">{storyInfo && storyInfo.title}</h1>
					<div className="flex items-center gap-3">
						<span className="text-xs text-slate-500">{storyInfo && moment(storyInfo.visitedDate).format('Do MMM YYYY')}</span>
					</div>

					<div className="flex justify-end items-center gap-3">
						{storyInfo &&
							storyInfo.visitedLocation.map((item, index) =>
								storyInfo.visitedLocation.length == index + 1 ? (
									<div className="inline-flex items-center gap-2 text-[13px] text-cyan-600 bg-cyan-200/40 rounded px-2 py-1">
										<span className="text-sm">
											<GrMapLocation className="text-sm inline me-1" />
											{item}
										</span>
									</div>
								) : (
									<div className="inline-flex items-center gap-2 text-[13px] text-cyan-600 bg-cyan-200/40 rounded px-2 py-1">
										<span className="text-sm">
											<GrMapLocation className="text-sm inline me-1" />
											{item}
										</span>
									</div>
								)
							)}
          </div>
          <img src={storyInfo && storyInfo.imageUrl} alt="Selected" className='w-full h-[300px] object-cover rounded-lg mt-1'/>
          <div className='mt-2'>
            <p className='text-sm text-slate-950 leading-6 text-justify whitespace-pre-line'>{storyInfo.story}</p>

          </div>
          
				</div>
			</div>
		</div>
	);
};

export default ViewTravelStory;
